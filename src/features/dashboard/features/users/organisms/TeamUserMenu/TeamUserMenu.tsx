import './TeamUserMenu.scoped.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    TeamQueryVariables,
    UpdateTeamMutationVariables,
    useTeamQuery,
    User,
    useUpdateTeamMutation
} from '@/graphql/generated';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';
import { ScreenSpinner } from '@/features/dashboard/atoms/ScreenSpinner';

import { UserMenu } from '../../molecules/UserMenu';

export type TeamUserMenuProps = {
    className?: string;
    userId: number;
};
TeamUserMenu.defaultProps = {
    className: ''
};

export function TeamUserMenu({ className, userId }: TeamUserMenuProps) {
    const { teamId } = useParams();
    const teamQuery = useTeamQuery({ id: teamId as string });
    const teamMutator = useUpdateTeamMutation();
    const queryClient = useQueryClient();
    const modal = useModalManageStore();
    const [waiting, setWaiting] = useState(false);
    const [user, setUser] = useState<User>({
        name: '',
        icon_image: ''
    } as User);
    const [role, setRole] = useState<'member' | 'admin' | ''>('');

    useEffect(() => {
        if (!teamQuery.isLoading) {
            const team = teamQuery.data?.team;
            if (!team) return;
            setRole('');
            let result = team.administrators.find((v) => v.ID === userId);
            if (result) {
                setRole('admin');
                setUser(result as User);
                return;
            }
            result = team.menbers.find((v) => v.ID === userId);
            if (result) {
                setRole('member');
                setUser(result as User);
            }
            result = team.pending.find((v) => v.ID === userId);
            if (result) {
                setRole('');
                setUser(result as User);
            }
        }
    }, [teamQuery.isLoading, teamQuery.data?.team, userId]);

    const switchRoleFn = async () => {
        if (!teamQuery.data) return;
        const { team } = teamQuery.data;
        const data: UpdateTeamMutationVariables = {
            id: teamId as string
        };
        if (role === 'member') {
            setRole('admin');
            data.administrators = [
                ...team.administrators.map((v) => v.ID),
                userId
            ];
            data.menbers = [
                ...team.menbers.map((v) => v.ID).filter((v) => v !== userId)
            ];
        } else if (role === 'admin') {
            setRole('member');
            data.administrators = [
                ...team.administrators
                    .map((v) => v.ID)
                    .filter((v) => v !== userId)
            ];
            data.menbers = [...team.menbers.map((v) => v.ID), userId];
        }
        await teamMutator.mutateAsync(data);
        await queryClient.invalidateQueries([
            'team',
            { id: teamId } as TeamQueryVariables
        ]);
    };

    const removeMemberFn = async () => {
        if (!teamQuery.data) return;
        setWaiting(true);
        const { team } = teamQuery.data;
        const data: UpdateTeamMutationVariables = {
            id: teamId as string,
            menbers: [
                ...team.menbers.map((v) => v.ID).filter((v) => v !== userId)
            ],
            pending: [
                ...team.pending.map((v) => v.ID).filter((v) => v !== userId)
            ]
        };
        await teamMutator.mutateAsync(data);
        await queryClient.invalidateQueries([
            'team',
            { id: teamId } as TeamQueryVariables
        ]);
        modal.close();
        setWaiting(false);
    };

    return (
        <div className={`TeamUserMenu ${className}`}>
            <ScreenSpinner visible={waiting} />
            <UserMenu
                user={user}
                switchRoleFn={switchRoleFn}
                removeMemberFn={removeMemberFn}
                role={role}
                type="team"
            />
        </div>
    );
}

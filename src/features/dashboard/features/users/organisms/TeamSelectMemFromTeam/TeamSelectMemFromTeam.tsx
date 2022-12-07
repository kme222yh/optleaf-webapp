import './TeamSelectMemFromTeam.scoped.scss';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    Team,
    useTeamQuery,
    useDashboardTopQuery,
    UpdateTeamMutationVariables,
    TeamQueryVariables,
    useUpdateTeamMutation
} from '@/graphql/generated';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';

import { SelectMenberFromTeam } from '../../molecules/SelectMenberFromTeam';

export type TeamSelectMemFromTeamProps = {
    className?: string;
    setWaitingFn?: (v: boolean) => void;
};
TeamSelectMemFromTeam.defaultProps = {
    className: '',
    setWaitingFn: () => {}
};

export function TeamSelectMemFromTeam({
    className,
    setWaitingFn
}: TeamSelectMemFromTeamProps) {
    const { teamId } = useParams();
    const query = useDashboardTopQuery();
    const teamQuery = useTeamQuery({ id: teamId as string });
    const mutator = useUpdateTeamMutation();
    const queryClient = useQueryClient();
    const [teams, setTeams] = useState<Team[]>([]);
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const modal = useModalManageStore();

    useEffect(() => {
        if (!query.isLoading) {
            if (!query.data) return;
            setTeams(query.data.teams as Team[]);
        }
    }, [query.isLoading, query.data?.teams]);

    const selectorFn = (id: number) => {
        if (selectedUsers.includes(id)) {
            setSelectedUsers(selectedUsers.filter((val) => val !== id));
        } else {
            setSelectedUsers(selectedUsers.concat(id));
        }
    };

    const updateFn = async () => {
        if (!teamQuery.data) return;
        setWaitingFn!(true);
        const data: UpdateTeamMutationVariables = {
            id: teamId as string,
            menbers: [
                ...teamQuery.data.team.menbers.map((val) => val.ID),
                ...selectedUsers
            ]
        };
        await mutator.mutateAsync(data);
        await queryClient.invalidateQueries([
            'team',
            { id: teamId } as TeamQueryVariables
        ]);
        setWaitingFn!(false);
        modal.close();
        setSelectedUsers([]);
    };

    return (
        <SelectMenberFromTeam
            className={`TeamSelectMemFromTeam ${className}`}
            teams={teams}
            selected={selectedUsers}
            selectorFn={selectorFn}
            updateFn={updateFn}
        />
    );
}

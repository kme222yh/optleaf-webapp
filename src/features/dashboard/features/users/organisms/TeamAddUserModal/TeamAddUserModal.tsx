import './TeamAddUserModal.scoped.scss';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { TeamQueryVariables, useTeamQuery } from '@/graphql/generated';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';

import { inviteTeamByEmail } from '../../api/invitation';
import { InvitationCredentials } from '../../types';
import { AddUserModal } from '../../molecules/AddUserModal';

export type TeamAddUserModalProps = {
    className?: string;
};
TeamAddUserModal.defaultProps = {
    className: ''
};

export function TeamAddUserModal({ className }: TeamAddUserModalProps) {
    const [waiting, setWaiting] = useState(false);
    const { teamId } = useParams();
    const query = useTeamQuery({ id: teamId as string });
    const queryClient = useQueryClient();
    const form = useForm<InvitationCredentials>();
    const modal = useModalManageStore();

    const submitFn = async (data: InvitationCredentials) => {
        if (!query.data?.team) return;
        setWaiting(true);
        try {
            await inviteTeamByEmail({
                id: query.data.team.id,
                email: data.email
            });
            await queryClient.invalidateQueries([
                'team',
                { id: teamId } as TeamQueryVariables
            ]);
            form.reset();
            modal.close();
        } catch (error) {
            console.log(error);
        }
        setWaiting(false);
    };

    return (
        <AddUserModal
            className={`TeamAddUserModal ${className}`}
            waiting={waiting}
            submitFn={submitFn}
        />
    );
}

import './TeamInvitationForm.scoped.scss';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { TeamQueryVariables, useTeamQuery } from '@/graphql/generated';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';

import { inviteTeamByEmail } from '../../api/invitation';
import { InvitationCredentials } from '../../types';

import { InvitationForm } from '../../molecules/InvitationForm';

export type TeamInvitationFormProps = {
    className?: string;
    setWaitingFn?: (v: boolean) => void;
};
TeamInvitationForm.defaultProps = {
    className: '',
    setWaitingFn: () => {}
};

export function TeamInvitationForm({
    className,
    setWaitingFn
}: TeamInvitationFormProps) {
    const { teamId } = useParams();
    const query = useTeamQuery({ id: teamId as string });
    const queryClient = useQueryClient();
    const form = useForm<InvitationCredentials>();
    const modal = useModalManageStore();

    const submitFn = async (data: InvitationCredentials) => {
        if (!query.data?.team) return;
        setWaitingFn!(true);
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
        setWaitingFn!(false);
    };

    return (
        <InvitationForm
            className={`TeamInvitationForm ${className}`}
            submitFn={submitFn}
        />
    );
}

import './ProjectInvitationForm.scoped.scss';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { ProjectQueryVariables, useProjectQuery } from '@/graphql/generated';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';

import { inviteProjectByEmail } from '../../api/invitation';
import { InvitationCredentials } from '../../types';

import { InvitationForm } from '../../molecules/InvitationForm';

export type ProjectInvitationFormProps = {
    className?: string;
    setWaitingFn?: (v: boolean) => void;
};
ProjectInvitationForm.defaultProps = {
    className: '',
    setWaitingFn: () => {}
};

export function ProjectInvitationForm({
    className,
    setWaitingFn
}: ProjectInvitationFormProps) {
    const { id: projectId } = useParams();
    const query = useProjectQuery({ id: projectId as string });
    const queryClient = useQueryClient();
    const form = useForm<InvitationCredentials>();
    const modal = useModalManageStore();

    const submitFn = async (data: InvitationCredentials) => {
        if (!query.data?.project) return;
        setWaitingFn!(true);
        try {
            await inviteProjectByEmail({
                id: query.data.project.id,
                email: data.email
            });
            await queryClient.invalidateQueries([
                'project',
                { id: projectId } as ProjectQueryVariables
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
            className={`ProjectInvitationForm ${className}`}
            submitFn={submitFn}
        />
    );
}

import './ProjectAddUserModal.scoped.scss';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { ProjectQueryVariables, useProjectQuery } from '@/graphql/generated';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';

import { inviteProjectByEmail } from '../../api/invitation';
import { InvitationCredentials } from '../../types';
import { AddUserModal } from '../../molecules/AddUserModal';

export type ProjectAddUserModalProps = {
    className?: string;
};
ProjectAddUserModal.defaultProps = {
    className: ''
};

export function ProjectAddUserModal({ className }: ProjectAddUserModalProps) {
    const [waiting, setWaiting] = useState(false);
    const { id: projectId } = useParams();
    const query = useProjectQuery({ id: projectId as string });
    const queryClient = useQueryClient();
    const form = useForm<InvitationCredentials>();
    const modal = useModalManageStore();

    const submitFn = async (data: InvitationCredentials) => {
        if (!query.data?.project) return;
        setWaiting(true);
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
        setWaiting(false);
    };

    return (
        <AddUserModal
            className={`ProjectAddUserModal ${className}`}
            waiting={waiting}
            submitFn={submitFn}
        />
    );
}

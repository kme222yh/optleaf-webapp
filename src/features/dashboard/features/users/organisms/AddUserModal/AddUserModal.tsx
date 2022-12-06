/* eslint-disable jsx-a11y/control-has-associated-label */
import './AddUserModal.scoped.scss';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { ProjectQueryVariables, useProjectQuery } from '@/graphql/generated';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';
import { ScreenSpinner } from '@/features/dashboard/atoms/ScreenSpinner';

import { SelectTeamMenber } from '../SelectTeamMenber';
import { inviteProjectByEmail } from '../../api/invitation';
import { InvitationCredentials } from '../../types';

export type AddUserModalProps = {
    className?: string;
};
AddUserModal.defaultProps = {
    className: ''
};

export function AddUserModal({ className }: AddUserModalProps) {
    const [waiting, setWaiting] = useState(false);
    const { id: projectId } = useParams();
    const query = useProjectQuery({ id: projectId as string });
    const queryClient = useQueryClient();
    const form = useForm<InvitationCredentials>();
    const modal = useModalManageStore();

    const submit = async (data: InvitationCredentials) => {
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
        <div className={`AddUserModal ${className}`}>
            <ScreenSpinner visible={waiting} />

            <div className="AddUserModal-body">
                <p className="AddUserModal-title">Add Menber</p>
            </div>
            <div className="AddUserModal-invitation">
                <p className="AddUserModal-text">Send invitation mail</p>
                <form
                    className="AddUserModal-invitation-form"
                    onSubmit={form.handleSubmit(submit)}
                >
                    <input
                        className="AddUserModal-invitation-input"
                        id="email"
                        type="email"
                        placeholder="email..."
                        {...form.register('email', { required: true })}
                    />
                    <button
                        className="AddUserModal-invitation-submit"
                        type="submit"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                </form>
            </div>
            <div className="AddUserModal-choose">
                <p className="AddUserModal-text">Choose from your team</p>
                <SelectTeamMenber />
            </div>
        </div>
    );
}

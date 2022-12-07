import './ProjectAddUserModal.scoped.scss';

import { useState } from 'react';

import { ScreenSpinner } from '@/features/dashboard/atoms/ScreenSpinner';

import { ProjectInvitationForm } from '../../organisms/ProjectInvitationForm';
import { ProjectSelectMemFromTeam } from '../../organisms/ProjectSelectMemFromTeam';

export type ProjectAddUserModalProps = {
    className?: string;
};
ProjectAddUserModal.defaultProps = {
    className: ''
};

export function ProjectAddUserModal({ className }: ProjectAddUserModalProps) {
    const [waiting, setWaiting] = useState(false);
    return (
        <div className={`ProjectAddUserModal ${className}`}>
            <ScreenSpinner visible={waiting} />

            <div className="ProjectAddUserModal-body">
                <p className="ProjectAddUserModal-title">Add Menber</p>
            </div>
            <div className="ProjectAddUserModal-invitation">
                <p className="ProjectAddUserModal-text">Send invitation mail</p>
                <ProjectInvitationForm setWaitingFn={setWaiting} />
            </div>
            <div className="ProjectAddUserModal-choose">
                <p className="ProjectAddUserModal-text">
                    Choose from your team
                </p>
                <ProjectSelectMemFromTeam setWaitingFn={setWaiting} />
            </div>
        </div>
    );
}

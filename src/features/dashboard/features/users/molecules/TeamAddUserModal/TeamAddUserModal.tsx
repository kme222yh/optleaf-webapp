import './TeamAddUserModal.scoped.scss';

import { useState } from 'react';

import { ScreenSpinner } from '@/features/dashboard/atoms/ScreenSpinner';

import { TeamInvitationForm } from '../../organisms/TeamInvitationForm';
import { TeamSelectMemFromTeam } from '../../organisms/TeamSelectMemFromTeam';

export type TeamAddUserModalProps = {
    className?: string;
};
TeamAddUserModal.defaultProps = {
    className: ''
};

export function TeamAddUserModal({ className }: TeamAddUserModalProps) {
    const [waiting, setWaiting] = useState(false);
    return (
        <div className={`TeamAddUserModal ${className}`}>
            <ScreenSpinner visible={waiting} />

            <div className="TeamAddUserModal-body">
                <p className="TeamAddUserModal-title">Add Menber</p>
            </div>
            <div className="TeamAddUserModal-invitation">
                <p className="TeamAddUserModal-text">Send invitation mail</p>
                <TeamInvitationForm setWaitingFn={setWaiting} />
            </div>
            <div className="TeamAddUserModal-choose">
                <p className="TeamAddUserModal-text">Choose from your team</p>
                <TeamSelectMemFromTeam setWaitingFn={setWaiting} />
            </div>
        </div>
    );
}

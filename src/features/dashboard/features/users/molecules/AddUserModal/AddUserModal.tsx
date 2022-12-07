import './AddUserModal.scoped.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { ScreenSpinner } from '@/features/dashboard/atoms/ScreenSpinner';

import { SelectTeamMenber } from '../../organisms/SelectTeamMenber';
import { InvitationCredentials } from '../../types';

export type AddUserModalProps = {
    className?: string;
    waiting: boolean;
    submitFn: (data: InvitationCredentials) => {};
};
AddUserModal.defaultProps = {
    className: ''
};

export function AddUserModal({
    className,
    waiting,
    submitFn
}: AddUserModalProps) {
    const form = useForm<InvitationCredentials>();
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
                    onSubmit={form.handleSubmit(submitFn)}
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

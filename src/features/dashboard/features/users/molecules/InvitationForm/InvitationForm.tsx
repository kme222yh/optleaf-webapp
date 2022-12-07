import './InvitationForm.scoped.scss';

import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { InvitationCredentials } from '../../types';

export type InvitationFormProps = {
    className?: string;
    submitFn: (data: InvitationCredentials) => {};
};
InvitationForm.defaultProps = {
    className: ''
};

export function InvitationForm({ className, submitFn }: InvitationFormProps) {
    const form = useForm<InvitationCredentials>();
    return (
        <div className={`InvitationForm ${className}`}>
            <form
                className="InvitationForm-form"
                onSubmit={form.handleSubmit(submitFn)}
            >
                <input
                    className="InvitationForm-input"
                    id="email"
                    type="email"
                    placeholder="email..."
                    {...form.register('email', { required: true })}
                />
                <button className="InvitationForm-submit" type="submit">
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
            </form>
        </div>
    );
}

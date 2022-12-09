import './DeleteAccountForm.scoped.scss';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '@/providers/auth';

import { InputText } from '../../atoms/InputText';
import { UserInputData } from '../../types';
import { DeleteUser } from '../../api/user';
import { RoundedButtonDanger } from '../../atoms/RoundedButtonDanger';

export type DeleteAccountFormProps = {
    className?: string;
    waitingFn: (v: boolean) => void;
};
DeleteAccountForm.defaultProps = {
    className: ''
};

export function DeleteAccountForm({
    className,
    waitingFn
}: DeleteAccountFormProps) {
    const form = useForm<UserInputData>();
    const { user, logout } = useAuth();
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const watchEmailInput = () => {
        const shouldDiabled = form.getValues('email') !== user?.email;
        if (shouldDiabled !== buttonDisabled) setButtonDisabled(shouldDiabled);
    };

    const submitFn = async (data: UserInputData) => {
        if (data.email !== user?.email) return;
        const result = window.confirm('Are you ok?');
        if (!result) return;

        waitingFn(true);
        try {
            await DeleteUser();
            await logout();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`DeleteAccountForm ${className}`}>
            <p className="DeleteAccountForm-title">Delete Account</p>
            <p className="DeleteAccountForm-msg">
                Enter your email to delete your account.
            </p>
            <form
                className="DeleteAccountForm-form"
                onSubmit={form.handleSubmit(submitFn)}
                onChange={watchEmailInput}
            >
                <div className="DeleteAccountForm-form-row">
                    <InputText
                        id="email"
                        type="email"
                        label="email"
                        config={form.register('email', { required: true })}
                    />
                </div>
                <RoundedButtonDanger text="delete" disabled={buttonDisabled} />
            </form>
        </div>
    );
}

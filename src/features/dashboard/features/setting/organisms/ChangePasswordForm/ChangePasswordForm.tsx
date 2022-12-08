import './ChangePasswordForm.scoped.scss';

import { useForm } from 'react-hook-form';

import { InputText } from '../../atoms/InputText';
import { RoundedButton } from '../../atoms/RoundedButton';
import { UserInputData } from '../../types';
import { UpdateUserData } from '../../api/user';

export type ChangePasswordFormProps = {
    className?: string;
    waitingFn: (v: boolean) => void;
};
ChangePasswordForm.defaultProps = {
    className: ''
};

export function ChangePasswordForm({
    className,
    waitingFn
}: ChangePasswordFormProps) {
    const form = useForm<UserInputData>();

    const submitFn = async (data: UserInputData) => {
        waitingFn(true);
        try {
            await UpdateUserData(data);
        } catch (error) {
            console.log(error);
        }
        waitingFn(false);
    };
    return (
        <div className={`ChangePasswordForm ${className}`}>
            <p className="ChangePasswordForm-title">Change Password</p>
            <form
                className="ChangePasswordForm-form"
                onSubmit={form.handleSubmit(submitFn)}
            >
                <div className="ChangePasswordForm-form-row">
                    <InputText
                        id="password"
                        type="password"
                        label="Password"
                        config={form.register('password', { required: true })}
                    />
                </div>
                <div className="ChangePasswordForm-form-row">
                    <InputText
                        id="password_confirmed"
                        type="password"
                        label="Confirm password"
                        config={form.register('password_confirmed', {
                            required: true
                        })}
                    />
                </div>
                <RoundedButton text="submit" />
            </form>
        </div>
    );
}

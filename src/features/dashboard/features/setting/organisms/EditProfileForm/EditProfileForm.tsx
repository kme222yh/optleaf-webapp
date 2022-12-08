import './EditProfileForm.scoped.scss';

import { useForm } from 'react-hook-form';

import { UserIcon } from '@/features/dashboard/atoms/UserIcon';

import { InputText } from '../../atoms/InputText';
import { UserInputData } from '../../types';
import { RoundedButton } from '../../atoms/RoundedButton';
import { UpdateUserData } from '../../api/user';

export type EditProfileFormProps = {
    className?: string;
    waitingFn: (v: boolean) => void;
};
EditProfileForm.defaultProps = {
    className: ''
};

export function EditProfileForm({
    className,
    waitingFn
}: EditProfileFormProps) {
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
        <div className={`EditProfileForm ${className}`}>
            <form
                className="EditProfileForm-form"
                onSubmit={form.handleSubmit(submitFn)}
            >
                <div className="EditProfileForm-icon">
                    <UserIcon size="90px" />
                </div>
                <div className="EditProfileForm-form-row">
                    <InputText
                        id="name"
                        type="name"
                        label="name"
                        config={form.register('name')}
                    />
                </div>
                <div className="EditProfileForm-form-row">
                    <InputText
                        id="email"
                        type="email"
                        label="email"
                        config={form.register('email')}
                    />
                </div>
                <RoundedButton text="submit" />
            </form>
            <p className="EditProfileForm-msg">
                Enter only the information you wish to change.
            </p>
        </div>
    );
}

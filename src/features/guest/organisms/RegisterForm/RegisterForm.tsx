import './RegisterForm.scoped.scss';

import { FormArea } from '../../atoms/FormArea';
import { FormInputText } from '../../atoms/FormInputText';
import { RoundedButton } from '../../atoms/RoundedButton';

export type RegisterFormProps = {
    className?: string;
};
RegisterForm.defaultProps = {
    className: ''
};

export function RegisterForm({ className }: RegisterFormProps) {
    return (
        <FormArea
            className={`RegisterForm ${className}`}
            action="POST"
            onSubmit={() => {}}
        >
            <FormInputText
                id="name"
                placeholder="user name"
                type="text"
                required
            />
            <FormInputText
                id="email"
                placeholder="email"
                type="email"
                required
            />
            <FormInputText
                id="password"
                placeholder="password"
                type="password"
                required
            />
            <FormInputText
                id="password_confirmation"
                placeholder="confirm password"
                type="password"
                required
            />
            <RoundedButton text="register" collor_reverse disabled />
        </FormArea>
    );
}

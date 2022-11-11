import './LoginForm.scss';

import { FormArea } from '../../atoms/FormArea';
import { FormInputText } from '../../atoms/FormInputText';
import { RoundedButton } from '../../atoms/RoundedButton';

export type LoginFormProps = {
    className?: string;
};
LoginForm.defaultProps = {
    className: ''
};

export function LoginForm({ className }: LoginFormProps) {
    return (
        <FormArea
            className={`LoginForm ${className}`}
            action="POST"
            onSubmit={() => {}}
        >
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
            <RoundedButton text="login" collor_reverse disabled />
        </FormArea>
    );
}

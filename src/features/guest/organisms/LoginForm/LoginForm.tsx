import './LoginForm.scss';

import { useForm } from 'react-hook-form';

import { useAuth } from '@/providers/auth';
import { LoginCredentials } from '@/types/auth';
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
    const { login } = useAuth();
    const methods = useForm<LoginCredentials>();
    const isValid = async (data: LoginCredentials) => {
        await login(data);
    };
    const isInValid = () => {
        console.log('Fail Login');
    };

    return (
        <FormArea
            className={`LoginForm ${className}`}
            action="POST"
            onSubmit={methods.handleSubmit(isValid, isInValid)}
        >
            <FormInputText
                id="email"
                placeholder="email"
                type="email"
                required
                config={methods.register('email', {
                    required: 'Email required.'
                })}
            />
            <FormInputText
                id="password"
                placeholder="password"
                type="password"
                required
                config={methods.register('password', {
                    required: 'Password required.'
                })}
            />
            <RoundedButton text="login" collor_reverse disabled />
        </FormArea>
    );
}

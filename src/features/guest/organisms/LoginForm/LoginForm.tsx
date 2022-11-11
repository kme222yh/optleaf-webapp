import './LoginForm.scss';

import { useForm } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import { useRef, useState } from 'react';

import { ErrorMessage } from '@/types/error';
import { useAuth } from '@/providers/auth';
import { LoginCredentials } from '@/types/auth';
import { FormArea } from '../../atoms/FormArea';
import { FormInputText } from '../../atoms/FormInputText';
import { RoundedButton } from '../../atoms/RoundedButton';
import { ScreenSpinner } from '../../atoms/ScreenSpinner';
import { WarningText } from '../../atoms/WarningText';

export type LoginFormProps = {
    className?: string;
};
LoginForm.defaultProps = {
    className: ''
};

export function LoginForm({ className }: LoginFormProps) {
    const { login } = useAuth();
    const form = useForm<LoginCredentials>();
    const loginSuccess = async (data: LoginCredentials) => {
        setLoginFailed(false);
        setEmailErrorMsg('');
        setPasswordErrorMsg('');
        try {
            await login(data);
        } catch (e) {
            if ((e as ErrorMessage).code && (e as ErrorMessage).message) {
                handleErrorMessage(e as ErrorMessage);
            }
        }
    };

    const [loginFailed, setLoginFailed] = useState(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState('');
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
    const handleErrorMessage = (error: ErrorMessage) => {
        // console.log(error);
        if (error.detail === undefined) {
            setLoginFailed(true);
            return;
        }
        if ('email' in error.detail!) {
            const description = Array.isArray(error.detail.email)
                ? error.detail.email[0]
                : error.detail.email;
            switch (description) {
                case 'validation.email':
                    setEmailErrorMsg('Invalid email.');
                    break;
                default:
                    break;
            }
        }
        if ('password' in error.detail!) {
            const description = Array.isArray(error.detail.password)
                ? error.detail.password[0]
                : error.detail.password;
            switch (description) {
                case 'validation.min.string':
                    setPasswordErrorMsg('At least 8 characters are required.');
                    break;
                case 'The password must contain at least one number.':
                case 'The password must contain at least one letter.':
                    setPasswordErrorMsg('Use letter and number.');
                    break;
                default:
                    break;
            }
        }
    };

    const nodeRef = useRef(null);

    return (
        <FormArea
            className={`LoginForm ${className}`}
            action="POST"
            onSubmit={form.handleSubmit(loginSuccess)}
        >
            <FormInputText
                id="email"
                placeholder="email"
                type="email"
                warning={emailErrorMsg}
                required
                config={form.register('email', {
                    required: 'Email required.'
                })}
            />
            <FormInputText
                id="password"
                placeholder="password"
                type="password"
                warning={passwordErrorMsg}
                required
                config={form.register('password', {
                    required: 'Password required.'
                })}
            />
            <WarningText>
                {loginFailed ? 'Email or password was wrong.' : ''}
            </WarningText>
            <RoundedButton
                text="login"
                collor_reverse
                disabled={
                    !form.formState.isValid || form.formState.isSubmitting
                }
            />
            <CSSTransition
                nodeRef={nodeRef}
                in={form.formState.isSubmitting}
                timeout={300}
                classNames="fade"
            >
                <ScreenSpinner nodeRef={nodeRef} />
            </CSSTransition>
        </FormArea>
    );
}

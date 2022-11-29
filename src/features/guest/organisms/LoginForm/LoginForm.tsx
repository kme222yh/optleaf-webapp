import './LoginForm.scss';

import { useForm } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import { ErrorMessage } from '@/types/error';
import { useAuth } from '@/providers/auth';
import { LoginCredentials } from '@/types/auth';
import { FormArea } from '../../atoms/FormArea';
import { FormInputText } from '../../atoms/FormInputText';
import { RoundedButton } from '../../atoms/RoundedButton';
import { ScreenSpinner } from '../../atoms/ScreenSpinner';
import { WarningText } from '../../atoms/WarningText';
import { useHandleAuthErrors } from '../../hooks/handleAuthError';

export type LoginFormProps = {
    className?: string;
};
LoginForm.defaultProps = {
    className: ''
};

export function LoginForm({ className }: LoginFormProps) {
    const { login } = useAuth();
    const nodeRef = useRef(null);
    const form = useForm<LoginCredentials>();
    const errorMsg = useHandleAuthErrors();
    const sendForm = async (data: LoginCredentials) => {
        try {
            await login(data);
        } catch (e) {
            if ((e as ErrorMessage).code && (e as ErrorMessage).message) {
                errorMsg.handler(e as ErrorMessage);
            } else {
                errorMsg.maybeServerError();
            }
        }
    };

    return (
        <FormArea
            className={`LoginForm ${className}`}
            action="POST"
            onSubmit={form.handleSubmit(sendForm)}
        >
            <FormInputText
                id="email"
                placeholder="email"
                type="email"
                warning={errorMsg.email}
                config={form.register('email', {
                    required: 'Email required.'
                })}
            />
            <FormInputText
                id="password"
                placeholder="password"
                type="password"
                warning={errorMsg.password}
                config={form.register('password', {
                    required: 'Password required.'
                })}
            />
            <WarningText>{errorMsg.somethingWrong}</WarningText>
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

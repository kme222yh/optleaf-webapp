import './RegisterForm.scss';

import { useForm } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import { ErrorMessage } from '@/types/error';
import { useAuth } from '@/providers/auth';
import { RegisterCredentials } from '@/types/auth';
import { FormArea } from '../../atoms/FormArea';
import { FormInputText } from '../../atoms/FormInputText';
import { RoundedButton } from '../../atoms/RoundedButton';
import { ScreenSpinner } from '../../atoms/ScreenSpinner';
import { WarningText } from '../../atoms/WarningText';
import { useHandleAuthErrors } from '../../hooks/handleAuthError';

export type RegisterFormProps = {
    className?: string;
};
RegisterForm.defaultProps = {
    className: ''
};

export function RegisterForm({ className }: RegisterFormProps) {
    const { register } = useAuth();
    const nodeRef = useRef(null);
    const form = useForm<RegisterCredentials>();
    const errorMsg = useHandleAuthErrors();
    const sendForm = async (data: RegisterCredentials) => {
        try {
            await register(data);
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
            className={`RegisterForm ${className}`}
            action="POST"
            onSubmit={form.handleSubmit(sendForm)}
        >
            <FormInputText
                id="name"
                placeholder="user name"
                type="text"
                config={form.register('name', {
                    required: true
                })}
            />
            <FormInputText
                id="email"
                placeholder="email"
                type="email"
                warning={errorMsg.email}
                config={form.register('email', {
                    required: true
                })}
            />
            <FormInputText
                id="password"
                placeholder="password"
                type="password"
                warning={errorMsg.password}
                config={form.register('password', {
                    required: true
                })}
            />
            <FormInputText
                id="password_confirmation"
                placeholder="confirm password"
                type="password"
                config={form.register('password_confirmation', {
                    required: true
                })}
            />
            <WarningText>{errorMsg.somethingWrong}</WarningText>
            <RoundedButton
                text="register"
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

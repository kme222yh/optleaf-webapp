import './Login.scoped.scss';

import { useForm } from 'react-hook-form';

import { ErrorMessage } from '@/types/error';
import { useAuth } from '@/providers/auth';
import { LoginCredentials } from '@/types/auth';

import { FormRow } from '../../molecules/FormRow';
import { Form } from '../../molecules/Form';
import { useHandleAuthErrors } from '../../hooks/handleAuthError';

export type LoginProps = {
    className?: string;
};
Login.defaultProps = {
    className: ''
};

export function Login({ className }: LoginProps) {
    const { login } = useAuth();
    const form = useForm<LoginCredentials>();
    const errorMsg = useHandleAuthErrors();
    const onSubmitFn = async (data: LoginCredentials) => {
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
        <Form
            className={`Login ${className}`}
            onSubmitFn={form.handleSubmit(onSubmitFn)}
            errText={errorMsg.somethingWrong}
            isWaiting={form.formState.isSubmitting}
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            buttonText="login"
        >
            <FormRow
                id="email"
                placeholder="email"
                type="email"
                warning={errorMsg.email}
                config={form.register('email', {
                    required: 'Email required.'
                })}
            />
            <FormRow
                id="password"
                placeholder="password"
                type="password"
                warning={errorMsg.password}
                config={form.register('password', {
                    required: 'Password required.'
                })}
            />
        </Form>
    );
}

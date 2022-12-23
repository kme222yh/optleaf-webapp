import './Register.scoped.scss';

import { useForm } from 'react-hook-form';

import { ErrorMessage } from '@/types/error';
import { useAuth } from '@/providers/auth';
import { RegisterCredentials } from '@/types/auth';

import { FormRow } from '../../molecules/FormRow';
import { Form } from '../../molecules/Form';
import { useHandleAuthErrors } from '../../hooks/handleAuthError';
export type RegisterProps = {
    className?: string;
};
Register.defaultProps = {
    className: ''
};

export function Register({ className }: RegisterProps) {
    const { register } = useAuth();
    const form = useForm<RegisterCredentials>();
    const errorMsg = useHandleAuthErrors();
    const onSubmitFn = async (data: RegisterCredentials) => {
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
        <Form
            className={`Register ${className}`}
            onSubmitFn={form.handleSubmit(onSubmitFn)}
            errText={errorMsg.somethingWrong}
            isWaiting={form.formState.isSubmitting}
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            buttonText="register"
        >
            <FormRow
                id="name"
                placeholder="user name"
                type="text"
                warning=""
                config={form.register('name', {
                    required: true
                })}
            />
            <FormRow
                id="email"
                placeholder="email"
                type="email"
                warning={errorMsg.email}
                config={form.register('email', {
                    required: true
                })}
            />
            <FormRow
                id="password"
                placeholder="password"
                type="password"
                warning={errorMsg.password}
                config={form.register('password', {
                    required: true
                })}
            />
            <FormRow
                id="password_confirmation"
                placeholder="confirm password"
                type="password"
                warning=""
                config={form.register('password_confirmation', {
                    required: true
                })}
            />
        </Form>
    );
}

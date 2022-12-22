import './FogotPasswordForm.scss';

import { useForm } from 'react-hook-form';

// import { ErrorMessage } from '@/types/error';
// import { useAuth } from '@/providers/auth';
import { ResetPasswordCredentials } from '@/types/auth';

import { FormRow } from '../../molecules/FormRow';
import { Form } from '../../molecules/Form';
import { useHandleAuthErrors } from '../../hooks/handleAuthError';

export type FogotPasswordFormProps = {
    className?: string;
};
FogotPasswordForm.defaultProps = {
    className: ''
};

export function FogotPasswordForm({ className }: FogotPasswordFormProps) {
    // const { login } = useAuth();
    const form = useForm<ResetPasswordCredentials>();
    const errorMsg = useHandleAuthErrors();
    const onSubmitFn = async (data: ResetPasswordCredentials) => {
        console.log(data);
        // try {
        //     await login(data);
        // } catch (e) {
        //     if ((e as ErrorMessage).code && (e as ErrorMessage).message) {
        //         errorMsg.handler(e as ErrorMessage);
        //     } else {
        //         errorMsg.maybeServerError();
        //     }
        // }
    };

    return (
        <Form
            className={`FogotPasswordForm ${className}`}
            onSubmitFn={form.handleSubmit(onSubmitFn)}
            errText={errorMsg.somethingWrong}
            isWaiting={form.formState.isSubmitting}
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            buttonText="submit"
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
        </Form>
    );
}

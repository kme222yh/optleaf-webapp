import './FogotPasswordForm.scss';

import { useForm } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

// import { ErrorMessage } from '@/types/error';
// import { useAuth } from '@/providers/auth';
import { ResetPasswordCredentials } from '@/types/auth';
import { FormArea } from '../../atoms/FormArea';
import { FormInputText } from '../../atoms/FormInputText';
import { RoundedButton } from '../../atoms/RoundedButton';
import { ScreenSpinner } from '../../atoms/ScreenSpinner';
import { WarningText } from '../../atoms/WarningText';
import { useHandleAuthErrors } from '../../hooks/handleAuthError';

export type FogotPasswordFormProps = {
    className?: string;
};
FogotPasswordForm.defaultProps = {
    className: ''
};

export function FogotPasswordForm({ className }: FogotPasswordFormProps) {
    // const { login } = useAuth();
    const nodeRef = useRef(null);
    const form = useForm<ResetPasswordCredentials>();
    const errorMsg = useHandleAuthErrors();
    const sendForm = async (data: ResetPasswordCredentials) => {
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
        <FormArea
            className={`FogotPasswordForm ${className}`}
            action="POST"
            onSubmit={form.handleSubmit(sendForm)}
        >
            <FormInputText
                placeholder="user name"
                type="text"
                config={form.register('name', {
                    required: true
                })}
            />
            <FormInputText
                placeholder="email"
                type="email"
                warning={errorMsg.email}
                config={form.register('email', {
                    required: true
                })}
            />
            <WarningText>{errorMsg.somethingWrong}</WarningText>
            <RoundedButton
                text="reset password"
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

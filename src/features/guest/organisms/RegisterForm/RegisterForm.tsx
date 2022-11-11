import './RegisterForm.scss';

import { useForm } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import { useRef, useState } from 'react';

import { ErrorMessage } from '@/types/error';
import { useAuth } from '@/providers/auth';
import { RegisterCredentials } from '@/types/auth';
import { FormArea } from '../../atoms/FormArea';
import { FormInputText } from '../../atoms/FormInputText';
import { RoundedButton } from '../../atoms/RoundedButton';
import { ScreenSpinner } from '../../atoms/ScreenSpinner';
import { WarningText } from '../../atoms/WarningText';

export type RegisterFormProps = {
    className?: string;
};
RegisterForm.defaultProps = {
    className: ''
};

export function RegisterForm({ className }: RegisterFormProps) {
    const { register } = useAuth();
    const form = useForm<RegisterCredentials>();
    const registerSuccess = async (data: RegisterCredentials) => {
        setSomethingWrong(false);
        setEmailErrorMsg('');
        setPasswordErrorMsg('');
        try {
            await register(data);
        } catch (e) {
            if ((e as ErrorMessage).code && (e as ErrorMessage).message) {
                handleErrorMessage(e as ErrorMessage);
            }
        }
    };

    const [somethingWrong, setSomethingWrong] = useState(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState('');
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
    const handleErrorMessage = (error: ErrorMessage) => {
        // console.log(error);
        if ('email' in error.detail!) {
            const description = Array.isArray(error.detail.email)
                ? error.detail.email[0]
                : error.detail.email;
            switch (description) {
                case 'duplicate':
                    setEmailErrorMsg('Already exit.');
                    break;
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
                case 'validation.confirmed':
                    setPasswordErrorMsg('Confirmation password does not match');
                    break;
                default:
                    break;
            }
        }
    };

    const nodeRef = useRef(null);

    return (
        <FormArea
            className={`RegisterForm ${className}`}
            action="POST"
            onSubmit={form.handleSubmit(registerSuccess)}
        >
            <FormInputText
                id="name"
                placeholder="user name"
                type="text"
                required
                config={form.register('name', {
                    required: 'Name required.'
                })}
            />
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
            <FormInputText
                id="password_confirmation"
                placeholder="confirm password"
                type="password"
                required
                config={form.register('password_confirmation', {
                    required: 'Password required.'
                })}
            />
            <WarningText>
                {somethingWrong ? 'Sorry. Something went wrong.' : ''}
            </WarningText>
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

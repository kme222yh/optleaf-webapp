import { useState } from 'react';
import { ErrorMessage } from '@/types/error';

interface DA1 {
    [index: string]: string;
}
interface DA2 {
    [index: string]: DA1;
}

type AuthErrorMessages = {
    email: string;
    password: string;
    somethingWrong: string;
    handler: (error: ErrorMessage) => void;
    maybeServerError: () => void;
};

const msgDict: DA2 = {
    email: {
        duplicate: 'Already exit.',
        'validation.email': 'Invalid email.'
    },
    password: {
        'validation.min.string': 'At least 8 characters are required.',
        'The password must contain at least one number.':
            'Use letter and number.',
        'The password must contain at least one letter.':
            'Use letter and number.',
        'validation.confirmed': 'Confirmation password does not match'
    },
    somethingWrong: {
        authentication_incorrect: 'Email or password was wrong.',
        server_error: 'Sorry. Something went wrong.',
        default: 'Sorry. Something went wrong.'
    }
};

export function useHandleAuthErrors(): AuthErrorMessages {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [somethingWrong, setSomethingWrong] = useState('');

    const handler = (error: ErrorMessage) => {
        setEmail('');
        setPassword('');
        setSomethingWrong('');
        const detail = 'detail' in error ? error.detail : {};
        if ('email' in detail!) {
            const description = Array.isArray(detail.email)
                ? detail.email[0]
                : detail.email;
            if (description in msgDict.email) {
                setEmail(msgDict.email[description]);
            } else {
                setSomethingWrong(msgDict.somethingWrong.default);
            }
        }
        if ('password' in detail!) {
            const description = Array.isArray(detail.password)
                ? detail.password[0]
                : detail.password;
            if (description in msgDict.password) {
                setPassword(msgDict.password[description]);
            } else {
                setSomethingWrong(msgDict.somethingWrong.default);
            }
        }

        if (error.code in msgDict.somethingWrong) {
            setSomethingWrong(msgDict.somethingWrong[error.code]);
        }
    };

    const maybeServerError = () => {
        setEmail('');
        setPassword('');
        setSomethingWrong(msgDict.somethingWrong.default);
    };

    return { email, password, somethingWrong, handler, maybeServerError };
}

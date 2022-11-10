import { initReactQueryAuth } from 'react-query-auth';
import { loadUser, loginFn, registerFn, logoutFn } from '@/lib/auth';
import {
    LoginCredentials,
    RegisterCredentials,
    User,
    Error
} from '@/types/auth';
// import { Loading as LoaderComponent } from '../components/Loading';

const authConfig = {
    loadUser,
    loginFn,
    registerFn,
    logoutFn
    // LoaderComponent
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
    User | null,
    Error,
    LoginCredentials,
    RegisterCredentials
>(authConfig);

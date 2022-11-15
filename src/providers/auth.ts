import { storage } from '@/lib/storage';
import { initReactQueryAuth } from 'react-query-auth';
import { LoginCredentials, RegisterCredentials, User } from '@/types/auth';
import { ErrorMessage } from '@/types/error';
import {
    registerWithCredentials,
    loginWithCredentials,
    getUser,
    refreshWIthRefreshToken
} from '@/api/auth';
// import { Loading as LoaderComponent } from '../components/Loading';

async function refreshToken() {
    storage.useRefreshToken();
    await refreshWIthRefreshToken()
        .then((token) => {
            storage.setAccessToken(token.access_token);
            storage.setRefreshToken(token.refresh_token);
        })
        .catch(storage.clearToken);
}

async function loadUser() {
    let user: User | null = null;
    if (storage.getAccessToken() === null) {
        return user;
    }
    user = await getUser().catch(async () => {
        await refreshToken();
        if (storage.getAccessToken() === null) {
            return null;
        }
        return getUser();
    });
    return user;
}

async function loginFn(data: LoginCredentials) {
    let user: User | null = null;
    await loginWithCredentials(data).then((res) => {
        user = res.user;
        storage.setAccessToken(res.access_token);
        storage.setRefreshToken(res.refresh_token);
    });
    return user;
}

async function registerFn(data: RegisterCredentials) {
    let user: User | null = null;
    await registerWithCredentials(data).then((res) => {
        user = res.user;
        storage.setAccessToken(res.access_token);
        storage.setRefreshToken(res.refresh_token);
    });
    return user;
}

async function logoutFn() {
    storage.clearToken();
    window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
    loadUser,
    loginFn,
    registerFn,
    logoutFn
    // LoaderComponent
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
    User | null,
    ErrorMessage,
    LoginCredentials,
    RegisterCredentials
>(authConfig);

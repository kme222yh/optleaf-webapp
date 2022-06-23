import { storage } from '@/lib/storage'
import { LoginCredentials, RegisterCredentials, User } from '../types'
import { registerWithCredentials, loginWithCredentials, getUser, refreshWIthRefreshToken } from '../api'

async function refreshToken() {
    storage.useRefreshToken()
    await refreshWIthRefreshToken().then((token) => {
        storage.setAccessToken(token.access_token)
        storage.setRefreshToken(token.refresh_token)
    }).catch(storage.clearToken)
}


export async function loadUser() {
    let user: User | null = null;
    if (storage.getAccessToken() === null) {
        return user
    }
    user = await getUser().catch(async () => {
        await refreshToken()
        if (storage.getAccessToken() === null) {
            return null
        }
        return getUser()
    })
    return user
}

export async function loginFn(data: LoginCredentials) {
    let user: User | null = null;
    await loginWithCredentials(data).then(res => {
        user = res.user
        storage.setAccessToken(res.access_token)
        storage.setRefreshToken(res.refresh_token)
    }).catch(err => console.log(err))
    return user
}

export async function registerFn(data: RegisterCredentials) {
    let user: User | null = null;
    await registerWithCredentials(data).then(res => {
        user = res.user
        storage.setAccessToken(res.access_token)
        storage.setRefreshToken(res.refresh_token)
    }).catch(err => console.log(err))
    return user
}

export async function logoutFn() {
    storage.clearToken()
    window.location.assign(window.location.origin as unknown as string)
}

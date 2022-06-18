import { axios } from '@/lib/axios'
import { storage } from '@/lib/storage'
import { LoginCredentials, RegisterCredentials, User } from '../types'
import { registerWithCredentials, loginWithCredentials, getUser, refreshWIthRefreshToken } from '../api'

async function refreshToken() {
    storage.useRefreshToken()
    await refreshWIthRefreshToken().then((token) => {
        storage.setAccessToken(token.access_token)
        storage.setRefreshToken(token.refresh_token)
    })
}

export async function loadUser() {
    if (storage.getAccessToken() === null) {
        return null
    }
    let user = await getUser()
    if (user) {
        return user
    }
    await refreshToken()
    if (storage.getAccessToken() === null) {
        return null
    }
    user = await getUser()
    if (user) {
        return user
    }
    return null
}

export async function loginFn(data: LoginCredentials) {
    await loginWithCredentials(data).then((token) => {
        storage.setAccessToken(token.access_token)
        storage.setRefreshToken(token.refresh_token)
    })
    const user = await loadUser()
    return user
}

export async function registerFn(data: RegisterCredentials) {
    await registerWithCredentials(data)
    const user = await loginFn(data)
    return user
}

export async function logoutFn() {
    storage.clearToken()
    window.location.assign(window.location.origin as unknown as string)
}

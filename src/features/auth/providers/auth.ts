import { initReactQueryAuth } from 'react-query-auth'
import { loadUser, loginFn, registerFn, logoutFn } from '../lib/auth'
import { LoginCredentials, RegisterCredentials, User } from '../types'

const authConfig = {
    loadUser,
    loginFn,
    registerFn,
    logoutFn,
}

export const { AuthProvider, useAuth } = initReactQueryAuth<User | null, Error, LoginCredentials, RegisterCredentials>(
    authConfig
)

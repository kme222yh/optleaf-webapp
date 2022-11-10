import { axios } from '@/lib/axios';
import {
    LoginCredentials,
    RegisterCredentials,
    User,
    LoginResponse
} from '@/types/auth';

export async function registerWithCredentials(
    data: RegisterCredentials
): Promise<LoginResponse> {
    return axios.postForm('/auth/register', data);
}

export async function loginWithCredentials(
    data: LoginCredentials
): Promise<LoginResponse> {
    return axios.postForm('/auth/login', data);
}

export async function refreshWIthRefreshToken(): Promise<LoginResponse> {
    return axios.postForm('/auth/refresh');
}

export async function getUser(): Promise<User> {
    return axios.get('/user/me');
}

export async function deleteUser(): Promise<User> {
    return axios.delete('/user/me');
}

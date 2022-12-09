import { axios } from '@/lib/axios';
import { UserInputData, NormalResponse } from '../types';

export async function UpdateUserData(
    data: UserInputData
): Promise<NormalResponse> {
    const params = new FormData();
    if (data.email) params.append('email', data.email);
    if (data.name) params.append('name', data.name);
    if (data.icon_image) params.append('icon_image', data.icon_image);
    if (data.password) params.append('password', data.password);
    if (data.password_confirmed)
        params.append('password_confirmed', data.password_confirmed);
    return axios.post('/user/me', params);
}

export async function DeleteUser(): Promise<NormalResponse> {
    return axios.delete('/user/me');
}

export async function ResendVerifyMail(): Promise<NormalResponse> {
    return axios.get('/auth/email/verify_try');
}

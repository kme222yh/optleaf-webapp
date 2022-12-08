import { axios } from '@/lib/axios';
import { UserInputData, NormalResponse } from '../types';

export async function UpdateUserData(
    data: UserInputData
): Promise<NormalResponse> {
    const params = {} as UserInputData;
    if (data.email) params.email = data.email;
    if (data.name) params.name = data.name;
    if (data.icon_image?.length) params.icon_image = data.icon_image;
    if (data.password) params.password = data.password;
    if (data.password_confirmed)
        params.password_confirmed = data.password_confirmed;
    return axios.post('/user/me', params);
}

export async function DeleteUser(): Promise<NormalResponse> {
    return axios.delete('/user/me');
}

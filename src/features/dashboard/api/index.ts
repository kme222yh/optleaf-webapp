import { axios } from '@/lib/axios'
import { UserInputData, NormalResponse } from '../types'

export async function UpdateUserData(data: UserInputData): Promise<NormalResponse> {
    return axios.post('/user/me', data)
}
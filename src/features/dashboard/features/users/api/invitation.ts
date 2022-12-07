import { axios } from '@/lib/axios';

import { InvitationCredentials, NormalResponse } from '../types';

export async function inviteProjectByEmail(
    data: InvitationCredentials
): Promise<NormalResponse> {
    return axios.post('/invite/project', data);
}

export async function inviteTeamByEmail(
    data: InvitationCredentials
): Promise<NormalResponse> {
    return axios.post('/invite/team', data);
}

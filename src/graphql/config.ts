import { storage } from '@/lib/storage';

export const fetchParams = {
    headers: {
        Authorization: `Bearer ${storage.getAccessToken()}`,
        'Content-Type': 'application/json'
    }
};

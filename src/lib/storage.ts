export const storage = {
    getAccessToken: () => localStorage.getItem('accessToken'),
    setAccessToken: (token: string) => localStorage.setItem('accessToken', token),

    getRefreshToken: () => localStorage.getItem('refreshToken'),
    setRefreshToken: (token: string) => localStorage.setItem('refreshToken', token),

    useRefreshToken: () => {
        const refreshToken = localStorage.getItem('refreshToken')
        localStorage.setItem('accessToken', refreshToken === null ? '' : refreshToken)
    },

    clearToken: () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
    },
}

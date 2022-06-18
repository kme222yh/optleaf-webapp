import Axios, { AxiosRequestConfig } from 'axios'
import { storage } from './storage'

const apiUrl = process.env.REACT_APP_API

export const axios = Axios.create({
    baseURL: apiUrl,
})

function authRequestInterceptor(config: AxiosRequestConfig) {
    const token = storage.getAccessToken()
    if (config === null) {
        return null
    }
    const newConfig = config
    if (token) {
    newConfig.headers!.authorization = `Bearer ${token}`
    }
  newConfig.headers!.Accept = 'application/json'
  return newConfig
}

axios.interceptors.request.use(authRequestInterceptor)

axios.interceptors.response.use(
  (res): any => res.data // eslint-disable-line
)

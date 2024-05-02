import axios, { type InternalAxiosRequestConfig } from 'axios'
import { jwtDecode } from 'jwt-decode'
import { type AuthUser, type CreatedUser } from '@/@types/typesCRUD'
export const BackendPath = 'http://localhost:5000/api'
export const $host = axios.create({
    baseURL: 'http://localhost:5000/'
})
export const $authHost = axios.create({
    baseURL: 'http://localhost:5000/'
})
const authInterceptor = (config: InternalAxiosRequestConfig) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}
$authHost.interceptors.request.use(authInterceptor)

export const login = async (user: AuthUser) => {
    const { data } = await $host.post('api/user/login', { name: user.name, password: user.password })
    const token: string = data.token as string
    localStorage.setItem('token', token)
    return jwtDecode(token) as CreatedUser
}
export const check = async () => {
    const { data } = await $authHost.get('api/user/auth')
    const token: string = data.token as string
    localStorage.setItem('token', token)
    return jwtDecode(token) as CreatedUser
}

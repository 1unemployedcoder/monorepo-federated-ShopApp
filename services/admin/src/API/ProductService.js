import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
export const BackendPath = 'http://localhost:5000/api'
export const $host = axios.create({
    baseURL: 'http://localhost:5000/'
})
export const $authHost = axios.create({
    baseURL: 'http://localhost:5000/'
})
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}
$authHost.interceptors.request.use(authInterceptor)

export const registration = async (name, password) => {
    const { data } = await $host.post('api/user/registration', { name, password, role: 'ADMIN' })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const login = async (name, password) => {
    const { data } = await $host.post('api/user/login', { name, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const check = async () => {
    const response = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return response
}

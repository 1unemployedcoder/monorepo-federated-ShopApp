import { $authHost } from '@/API/ProductService'

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/products/', product)
    return data
}
export const createProductComment = async (id, comment) => {
    const { data } = await $authHost.post(`api/productComments/${id}`, comment)
    return data
}
export const check = async () => {
    const response = await $authHost.get('api/user/auth')
    return response
}

import { $authHost } from '@/API/htttpSettings'
import { type newsComment, type productComment } from '@/@types/createApiTypes'

export const createProductComment = async (id: number, comment: productComment) => {
    const { data } = await $authHost.post(`api/productComments/${id}`, comment)
    return data
}

export const deleteProductComment = async (id: number) => {
    const response = await $authHost.delete(`api/productComments/${id}`)
    return response
}

export const createNewsComment = async (id: number, comment: newsComment) => {
    const { data } = await $authHost.post(`api/newsComments/${id}`, comment)
    return data
}

export const deleteNewsComment = async (id: number) => {
    const response = await $authHost.delete(`api/newsComments/${id}`)
    return response
}

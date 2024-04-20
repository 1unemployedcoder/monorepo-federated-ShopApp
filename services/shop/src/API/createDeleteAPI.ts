import { $authHost } from '@/API/htttpSettings'
import {type newComment} from '@/@types/createApiTypes'

export const createProductComment = async (id: number, comment: newComment) => {
    const { data } = await $authHost.post(`api/productComments/${id}`, comment)
    return data
}

export const deleteProductComment = async (id: number) => {
    const response = await $authHost.delete(`api/productComments/${id}`);
    return response
}

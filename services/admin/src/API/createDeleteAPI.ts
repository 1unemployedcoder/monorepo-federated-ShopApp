import { $authHost } from '@/API/ProductService'
import { type CreatedNews, type CreatedProduct } from '@/@types/typesCRUD'

export const createProduct = async (product: CreatedProduct) => {
    const { data } = await $authHost.post('api/products/', product)
    return data
}
export const deleteProduct = async (id: number) => {
    const { data } = await $authHost.delete(`api/products/${id}`)
    return data
}
export const deleteProductComment = async (id: number) => {
    const { data } = await $authHost.delete(`api/productComments/${id}`)
    return data
}

export const createNews = async (neww: CreatedNews) => {
    const { data } = await $authHost.post('api/news/', neww)
    return data
}
export const deleteNews = async (id: number) => {
    const { data } = await $authHost.delete(`api/news/${id}`)
    return data
}
export const deleteCommentNews = async (id: number) => {
    const { data } = await $authHost.delete(`api/newsComments/${id}`)
    return data
}

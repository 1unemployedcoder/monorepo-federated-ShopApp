import { type fetchedProducts, type fetchProductsSlice } from '@/@types/reduxTypes'
import {
    type Category,
    type gettedNewsById,
    type gettedProductById,
    type NewsPost, type Product
} from '@/@types/types'
import axios from 'axios'
import { BackendPath } from '@/API/htttpSettings'

export async function getAll ({ search, sort, limit, page, typeId }: fetchProductsSlice) {
    const response = await axios.get(`${BackendPath}/products/?typeId=${typeId}&search=${search}&limit=${limit}&page=${page}&sortBy=${sort}`)
    return response.data as fetchedProducts
}

export async function getProductById (id: number) {
    const response = await axios.get(`${BackendPath}/products/${id}`)
    return response.data as gettedProductById
}

export async function getCategories () {
    const response = await axios.get(`${BackendPath}/type`)
    return response.data as Category
}

export async function getPopular () {
    const response = await axios.get(`${BackendPath}/products/`)
    return response.data.rows as Product[]
}

export async function getNews () {
    const response = await axios.get(`${BackendPath}/news/`)
    return response.data.rows as NewsPost[]
}

export async function getNewsById (id: number) {
    const response = await axios.get(`${BackendPath}/news/${id}`)
    return response.data as gettedNewsById
}

import axios from 'axios'
import { BackendPath } from '@/API/ProductService'
import {
    type Category,
    type fetchedProducts,
    type gettedNewsById,
    type gettedProductById,
    type NewsPost
} from '@/@types/types'

export async function getAll () {
    const response = await axios.get(`${BackendPath}/products/`)
    return response.data as fetchedProducts
}

export async function getProductById (id: number) {
    const response = await axios.get(`${BackendPath}/products/${id}`)
    return response.data as gettedProductById
}

export async function getCategories () {
    const response = await axios.get(`${BackendPath}/type`)
    return response.data as Category[]
}

export async function getPopular () {
    const response = await axios.get(`${BackendPath}/products/`)
    return response.data.rows as fetchedProducts[]
}

export async function getNews () {
    const response = await axios.get(`${BackendPath}/news/`)
    return response.data.rows as NewsPost[]
}

export async function getNewsById (id: number) {
    const response = await axios.get(`${BackendPath}/news/${id}`)
    return response.data as gettedNewsById
}

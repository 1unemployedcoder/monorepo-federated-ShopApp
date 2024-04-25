import axios from 'axios'
import { BackendPath } from '@/API/ProductService'
import {
    type Category,
    type fetchedProducts,
    type gettedNewsById,
    type gettedProductById
} from '@/@types/types'
import { type getProductType } from '@/@types/typesCRUD'
import { type NewsPost } from '@packages/shared'

export async function getAll ({ search, page }: getProductType) {
    const response = await axios.get(`${BackendPath}/products/?search=${search}&page=${page}&limit=2`)
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

export async function getNews () {
    const response = await axios.get(`${BackendPath}/news/`)
    return response.data.rows as NewsPost[]
}

export async function getNewsById (id: number) {
    const response = await axios.get(`${BackendPath}/news/${id}`)
    return response.data as gettedNewsById
}

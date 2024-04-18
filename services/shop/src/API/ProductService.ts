import { type fetchedProducts, type fetchProductsSlice } from '@/@types/reduxTypes'
import {
    type Category,
    type gettedNewsById,
    type gettedProductById,
    type NewsPost,
    type Product
} from '@/@types/types'
import axios from 'axios'

export async function getAll ({ search, sort, limit, page, typeId }: fetchProductsSlice) {
    const response = await axios.get('http://localhost:5000/api/products/')
    return response.data as fetchedProducts
}

export async function getProductById (id: number) {
    const response = await axios.get(`http://localhost:5000/api/products/${id}`)
    return response.data as gettedProductById
}

export async function getCategories () {
    const response = await axios.get('http://localhost:5000/api/type')
    return response.data as Category
}

export async function getPopular () {
    const response = await axios.get('http://localhost:5000/api/products/')
    return response.data.rows as fetchedProducts
}

export async function getNews () {
    const response = await axios.get('http://localhost:5000/api/news/')
    return response.data.rows as NewsPost
}

export async function getNewsById (id: number) {
    const response = await axios.get(`http://localhost:5000/api/news/${id}`)
    return response.data as gettedNewsById
}

import axios from 'axios'
import { BackendPath } from '@/API/ProductService'

export async function getAll () {
    const response = await axios.get(`${BackendPath}/products/`)
    return response.data
}

export async function getProductById (id) {
    const response = await axios.get(`${BackendPath}/products/${id}`)
    return response.data
}

export async function getCategories () {
    const response = await axios.get(`${BackendPath}/type`)
    return response.data
}

export async function getPopular () {
    const response = await axios.get(`${BackendPath}/products/`)
    return response.data.rows
}

export async function getNews () {
    const response = await axios.get(`${BackendPath}/news/`)
    return response.data.rows
}

export async function getNewsById (id) {
    const response = await axios.get(`${BackendPath}/news/${id}`)
    return response.data
}

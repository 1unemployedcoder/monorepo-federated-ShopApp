import { type Product } from '@packages/shared'

export interface Category {
    id: number
    name: string
}

export interface fetchedProducts {
    rows: Product[]
    count: number
}
export interface NewsCommentsTypes {
    user: User
    description: string
    id: number
    userId: number
}

export interface gettedProductById {
    productComments: ProductCommentsTypes[]
    categoryId: number
    description: string
    name: string
    id: number
    img: string
    price: number
}
interface User {
    name: string
}
export interface gettedNewsById {
    description: string
    user: User
    userId: number
    date: string
    id: number
    img: string
    title: string
    newsComments: NewsCommentsTypes[]
}

export interface ProductCommentsTypes extends NewsCommentsTypes {
    rate: number
}

export interface msg {
    event: string
    userName: string
    id: number
    message: string
}

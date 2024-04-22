// Интерфейсы
export interface Product {
    categoryId: number
    description: string
    name: string
    id: number
    img: string
    price: number
}

export interface Category {
    id: number
    name: string
}

export interface fetchedProducts {
    rows: Product[]
    count: number
}

export interface NewsPost {
    userId: number
    user: User
    date: string
    description: string
    id: number
    img: string
    title: string
}
interface User {
    name: string
}
export interface NewsCommentsTypes {
    user: User
    description: string
    id: number
    userId: number
}

export interface gettedProductById {
    productComments: ProductCommentsTypes[],
    categoryId: number
    description: string
    name: string
    id: number
    img: string
    price: number
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

// Типы


export type SortType = 'price_desc' | 'price_asc' | ''

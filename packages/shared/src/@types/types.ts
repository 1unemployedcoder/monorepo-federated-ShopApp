export interface Product {
    categoryId: number
    description: string
    name: string
    id: number
    img: string
    price: number
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

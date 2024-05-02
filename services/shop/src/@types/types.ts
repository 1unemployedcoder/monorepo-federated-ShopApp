import type React from 'react'

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

export interface CartProduct extends Product {
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

export interface MergeProductComments extends Product {
    productComments: ProductCommentsTypes[]
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

export interface IFButtonProps {
    primary: boolean
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

// Типы

export type CallbackFunction = () => Promise<void>

export type ArrayFetch = [() => Promise<NewsPost | Product>, boolean, string, React.Dispatch<React.SetStateAction<string>>]

export type MainTabs = 'popular' | 'news'

export type SortType = 'price_desc' | 'price_asc' | ''

export type eventData = 'connection' | 'message'

export interface msg {
    event: string
    userName: string
    id: number
    message: string
}

import type React from 'react'

// Интерфейсы

export interface Product {
    categoryId: number
    commentIds: number[]
    userId?: number
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
    author: string
    commentsIds: number[]
    date: string
    desc: string
    id: number
    img: string
    title: string
}

export interface NewsCommentsTypes {
    user: string
    description: string
    id: number
}

export interface MergeProductComments extends Product {
    productComments: ProductCommentsTypes[]
}

export interface gettedProductById {
    product: MergeProductComments
    comments: ProductCommentsTypes[]
}

export interface gettedNewsById {
    news: NewsPost
    comments: NewsCommentsTypes[]
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

export type MyHeaders = Record<string, string>

// Типы

export type CallbackFunction = () => Promise<void>

export type ArrayFetch = [() => Promise<NewsPost | Product>, boolean, string, React.Dispatch<React.SetStateAction<string>>]

export type MainTabs = 'popular' | 'news'

export type SortType = 'price_desc' | 'price_asc' | ''

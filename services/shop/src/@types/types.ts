import React from "react";

// Интерфейсы

export interface Category {
    value: string
    name: string
}

export interface Product {
    category: Category;
    commentIds: number[];
    desc: string;
    gadget: string;
    id: number;
    img: string;
    price: number;
}

export interface CartProduct extends Product {
    count: number;
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

export interface NewsCommentsTypes{
    name: string
    desc: string
    id: number
}

export interface MergeProductComments extends Product {
    comments: ProductCommentsTypes[]
}

export interface gettedProductById {
    product: MergeProductComments
    comments: ProductCommentsTypes[]
}

export interface gettedNewsById {
    news: NewsPost
    comments: NewsCommentsTypes[]
}

export interface ProductCommentsTypes extends NewsCommentsTypes{
    rate: number
}

export interface IFButtonProps {
    primary: boolean
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

export interface MyHeaders {
    [key: string]: string;
}

// Типы

export type CallbackFunction = () => Promise<void>

export type ArrayFetch = [() => Promise<NewsPost|Product>, boolean, string, React.Dispatch<React.SetStateAction<string>>]

export type MainTabs = 'popular' | 'news'

export type SortType = 'desc' | 'asc' | ''
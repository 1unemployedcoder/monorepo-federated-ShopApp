import React, {ReactNode} from "react";
import {
    CartProduct,
    Category,
    MergeProductComments,
    NewsCommentsTypes, NewsPost,
    Product,
    ProductCommentsTypes,
    SortType
} from "./types";

export interface ConditionalContentProps {
    data: number
    isLoading: boolean
    error: string
    refresh: React.Dispatch<React.SetStateAction<string>> | null
    SkeletonComponent: React.ComponentType<any>
    search: string | null
    children: React.ReactNode
}

export interface SkeletonLoaderProps {
    children: ReactNode
}

export interface ModalProps {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    children: ReactNode
}

export interface SelectProps {
    options: OptionsSelect[]
    onChange: React.Dispatch<React.SetStateAction<SortType>>
    defaultValue: SortType
    defaultName: string
    value: SortType
}

export interface OptionsSelect {
    name: string
    value: SortType
}

export interface CardProps {
    image: string
    name: string
    id: number
}

export interface PaginationProps {
    setPage: React.Dispatch<React.SetStateAction<number>>
    totalPages: number
    currentPage: number
}

export interface ProductArrayProps {
    products: MergeProductComments[]
}

export interface ProductObjectProps {
    product: MergeProductComments
}

export interface ProductFilterProps {
    sort: SortType
    setSort: React.Dispatch<React.SetStateAction<SortType>>
}

export interface UndefinedProductsProps {
    search: string | null
}

export interface ProductsContentProps {
    products: MergeProductComments[]
    totalPages: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    page: number
}

export interface ErrorRefreshProps {
    error: string
    refreshPage: React.Dispatch<React.SetStateAction<string>> | null
}

export interface ProductCommentsProps {
    comments: ProductCommentsTypes[] | NewsCommentsTypes[]
    refresh: () => Promise<Product | NewsPost>;
}

export interface CommentItemProps {
    comment: ProductCommentsTypes | NewsCommentsTypes
    refresh: () => Promise<Product | NewsPost>
}

export interface AuthUser {
    name: string
    password: string
}
export interface NewsItemProps {
    author: string
    img: string
    desc: string
    date: string
    title: string
    id: number
    isOpen: boolean
}

export interface CategoriesProps {
    categories: Category[]
}

export interface CardsArray {
    key: number
    content: ReactNode
}

export interface CarouselItemProps {
    cardsArray: CardsArray[]
    height: string
    width: string
    margin: string
    offset: number
    showArrowsState: boolean
}

export interface CartItemProps {
    product: CartProduct
}

export interface createCommentRefresh {
    refresh: () => Promise<Product | NewsPost>;
}

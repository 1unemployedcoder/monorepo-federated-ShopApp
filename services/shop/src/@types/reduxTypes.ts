import { type Category, type MergeProductComments, type SortType } from './types'

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface CategorySlice {
    id: number
    name: string
    categories: Category[]
}

export interface productSliceInitState {
    items: MergeProductComments[]
    count: number
    status: Status
}

export type cartCountValue = 'plus' | 'minus'

export interface fetchProductsSlice {
    search: string | null
    sort: SortType
    limit: number
    page: number
    typeId: string | undefined
}

export interface fetchedProducts {
    rows: MergeProductComments[]
    count: number
}

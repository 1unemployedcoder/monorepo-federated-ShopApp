import {Category, MergeProductComments, SortType} from "./types";

export enum Status {
    LOADING= 'loading',
    SUCCESS='success',
    ERROR='error'
}

export interface CategorySlice {
    value: {
        value: string
    }
    name: string
    categories: Category[]
}

export interface productSliceInitState {
    items: MergeProductComments[],
    headers: Object[],
    status: Status
}

export type cartCountValue = "plus" | "minus"

export interface fetchProductsSlice {
    search: string | null
    sort: SortType
    limit: number
    page: number
    type: String | undefined
}

export interface fetchedProducts {
    data: MergeProductComments[],
    headers: Object[],
}
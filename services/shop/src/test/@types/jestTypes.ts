import type { Product } from '@/@types/types'

interface getProductTest extends Product {
    createdAt?: string
    updatedAt?: string
}
export interface getAllTest {
    count: number
    rows: getProductTest[]
}

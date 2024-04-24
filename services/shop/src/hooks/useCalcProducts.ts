import { useMemo } from 'react'
import { type CartProduct } from '@/@types/types'

export const useTotalPrice = (count: number, price: number) => {
    return useMemo(() => {
        return count * price
    }, [count, price])
}

export const useTotalProducts = (products: CartProduct[]) => {
    return useMemo(() => {
        return {
            totalCount: products.reduce((accum, curr) => accum + curr.count, 0),
            totalPrice: products.reduce((accum, curr) => accum + (curr.price * curr.count), 0)
        }
    }, [products])
}

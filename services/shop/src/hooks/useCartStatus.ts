import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { cartSelector } from '@/redux/slices/cartSlice'

export const useCartStatus = (productId: number) => {
    const cartState = useSelector(cartSelector)
    const cart = Object.values(cartState)

    return useMemo(() => {
        return !(cart.find(p => p.id === productId) == null)
    }, [cartState, productId])
}

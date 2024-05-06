import { configureStore } from '@reduxjs/toolkit'
import cart from '@/redux/slices/cartSlice'

const cartStore = configureStore({
    reducer: {
        cart
    }
})
export type CartRootState = ReturnType<typeof cartStore.getState>
export const cartSelectorTest = (state: CartRootState) => state.cart.entities

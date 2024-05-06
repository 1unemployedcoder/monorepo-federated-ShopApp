import { createSlice, createEntityAdapter, type PayloadAction } from '@reduxjs/toolkit'
import { type CartProduct, type MergeProductComments } from '@/@types/types'
import { type cartCountValue } from '@/@types/reduxTypes'
import { type RootState } from '../store'
const cartAdapter = createEntityAdapter<CartProduct>()

const initialState = cartAdapter.getInitialState()

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItem (state, action: PayloadAction<MergeProductComments>) {
            const { id } = action.payload
            const existingProduct = state.entities[id]

            if (existingProduct !== undefined && existingProduct !== null) {
                state.entities[id].count++
            } else {
                cartAdapter.addOne(state, {
                    ...action.payload,
                    count: 1
                })
            }
        },
        delCartItem (state, action: PayloadAction<number>) {
            cartAdapter.removeOne(state, action.payload)
        },
        changeCountCart (state, action: PayloadAction<{ id: number, value: cartCountValue }>) {
            const { id, value } = action.payload
            const product = state.entities[id]
            if (product === undefined || product === null) return
            if (value === 'plus') {
                product.count++
            } else if (value === 'minus') {
                if (product.count > 1) {
                    product.count--
                } else {
                    cartAdapter.removeOne(state, id)
                }
            }
        }
    }
})

export const cartSelector = (state: RootState) => state.cart.entities
export const cartTestInitState = initialState
export const cartReducer = cartSlice.reducer
export const { setCartItem, delCartItem, changeCountCart } = cartSlice.actions
export default cartSlice.reducer

import {createSlice, createEntityAdapter, PayloadAction} from "@reduxjs/toolkit"
import {CartProduct, MergeProductComments} from "../../@types/types";
import {cartCountValue} from "../../@types/reduxTypes";
import {RootState} from "../store";
const cartAdapter = createEntityAdapter<CartProduct>()

const initialState = cartAdapter.getInitialState()

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItem(state, action: PayloadAction<MergeProductComments>) {
            const { id } = action.payload
            const existingProduct = state.entities[id]

            if (existingProduct) {
                state.entities[id].count++
            } else {
                cartAdapter.addOne(state, {
                    ...action.payload,
                    count: 1
                })
            }
        },
        delCartItem(state, action: PayloadAction<number>) {
            cartAdapter.removeOne(state, action.payload)
        },
        changeCountCart(state, action: PayloadAction<{id: number, value: cartCountValue}>) {
            const { id, value } = action.payload
            const product = state.entities[id]
            if (!product) return;
            if (value === "plus") {
                product.count++
            } else if (value === "minus") {
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

export const { setCartItem, delCartItem, changeCountCart } = cartSlice.actions;
export default cartSlice.reducer;

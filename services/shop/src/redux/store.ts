import { configureStore } from '@reduxjs/toolkit'
import categories from './slices/categoriesSlice'
import cart from './slices/cartSlice'
import products from './slices/productsSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        categories,
        cart,
        products
    }
})

const expStore = store

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default expStore

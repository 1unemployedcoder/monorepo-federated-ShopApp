import { configureStore } from '@reduxjs/toolkit'
import auth from "@/redux/slices/authSlice";
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        auth
    }
})

const expStore = store

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default expStore

import { createSlice } from '@reduxjs/toolkit'
import {AuthSlice} from "@/@types/reduxTypes";

const initialState: AuthSlice = {
    user: 'User',
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth (state, action) {
            state.user = action.payload.user
            state.isAuth = action.payload.isAuth
        },
    }
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer

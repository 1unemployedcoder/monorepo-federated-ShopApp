import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AuthSlice, Status } from '@/@types/reduxTypes'
import { check, login, registration } from '@/API/htttpSettings'
import { type AuthUser } from '@/@types/typesComponents'

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (_) => {
        const response = await check()
        return response
    }
)

export const register = createAsyncThunk(
    'auth/register',
    async (user: AuthUser) => {
        const response = await registration(user)
        return response
    }
)

export const loger = createAsyncThunk(
    'auth/loger',
    async (user: AuthUser) => {
        const response = await login(user)
        return response
    }
)

const initialState: AuthSlice = {
    user: 'User',
    isAuth: false,
    status: Status.LOADING
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth (state, action: PayloadAction<AuthSlice>) {
            state.user = action.payload.user
            state.isAuth = action.payload.isAuth
        }
    },
    extraReducers: builder => {
        builder.addCase(checkAuth.pending, (state) => {
            state.status = Status.LOADING
            state.isAuth = false
        })
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.isAuth = true
            state.user = action.payload.name
        })
        builder.addCase(checkAuth.rejected, (state) => {
            state.status = Status.ERROR
            state.isAuth = false
        })
        builder.addCase(register.pending, (state) => {
            state.status = Status.LOADING
            state.isAuth = false
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.isAuth = true
            state.user = action.payload.name
        })
        builder.addCase(register.rejected, (state) => {
            state.status = Status.ERROR
            state.isAuth = false
        })
        builder.addCase(loger.pending, (state) => {
            state.status = Status.LOADING
            state.isAuth = false
        })
        builder.addCase(loger.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.isAuth = true
            state.user = action.payload.name
        })
        builder.addCase(loger.rejected, (state) => {
            state.status = Status.ERROR
            state.isAuth = false
        })
    }
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer

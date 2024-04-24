import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AuthSlice, Status } from '@/@types/reduxTypes'
import { type AuthUser, type CreatedUser } from '@/@types/typesCRUD'
import { check, login } from '@/API/ProductService'

export const checkAuth = createAsyncThunk<CreatedUser, void>(
    'auth/checkAuth',
    async (_) => {
        const response = await check()
        return response
    }
)

export const loger = createAsyncThunk<CreatedUser, AuthUser>(
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

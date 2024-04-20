import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AuthSlice, Status } from '@/@types/reduxTypes'
import {check, registration} from '@/API/htttpSettings'
import { type CreatedUser } from '@/@types/createApiTypes'
import {AuthUser} from "@/@types/typesComponents";

export const checkAuth = createAsyncThunk<CreatedUser, void>(
    'auth/checkAuth',
    async (_, thunkAPI) => {
        try {
            const response = await check()
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const register = createAsyncThunk(
    'auth/register',
    async (user: AuthUser, thunkAPI) => {
        try {
            const response = await registration(user)
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
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
    }
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer

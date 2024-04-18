import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type fetchProductsSlice, type productSliceInitState, type fetchedProducts, Status } from '@/@types/reduxTypes'
import { type MergeProductComments } from '@/@types/types'
import { getAll } from '@/API/ProductService'

export const fetchProducts = createAsyncThunk<fetchedProducts, fetchProductsSlice>('products/fetchProducts',
    async ({ search, sort, limit, page, typeId }: fetchProductsSlice) => {
        return await getAll({ search, sort, limit, page, typeId })
    }
)

const initialState: productSliceInitState = {
    items: [],
    count: 0,
    status: Status.LOADING // loading, success, error
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts (state, action: PayloadAction<MergeProductComments[]>) {
            state.items = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload.rows
            state.count = action.payload.count
            state.status = Status.SUCCESS
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        })
    }
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer

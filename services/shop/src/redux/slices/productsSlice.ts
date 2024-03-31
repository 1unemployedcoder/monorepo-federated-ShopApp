import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import ProductService from "../../API/ProductService";
import {fetchProductsSlice, productSliceInitState, fetchedProducts, Status} from "../../@types/reduxTypes";
import {MergeProductComments} from "../../@types/types";

export const fetchProducts = createAsyncThunk<fetchedProducts, fetchProductsSlice>('products/fetchProducts',
    async ({search, sort, limit, page, type}: fetchProductsSlice) => {
        return await ProductService.getAll({search, sort, limit, page, type})
    },
)

const initialState: productSliceInitState = {
    items: [],
    headers: [],
    status: Status.LOADING, // loading, success, error
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<MergeProductComments[]>) {
            state.items = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload.data;
            state.headers = action.payload.headers;
            state.status = Status.SUCCESS
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        });
    }
})


export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
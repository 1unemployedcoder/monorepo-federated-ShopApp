import {createSlice} from "@reduxjs/toolkit";
import {CategorySlice} from "../../@types/reduxTypes";

const initialState: CategorySlice = {
    value: {
        value: 'all'
    },
    name: 'Все',
    categories: []
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.value = action.payload.value
            state.name = action.payload.name
        },
        setCategories(state, action){
            state.categories = action.payload
        }
    }
})

export const { setCategory, setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
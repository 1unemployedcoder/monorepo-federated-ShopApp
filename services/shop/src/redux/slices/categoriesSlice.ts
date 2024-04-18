import { createSlice } from '@reduxjs/toolkit'
import { type CategorySlice } from '@/@types/reduxTypes'

const initialState: CategorySlice = {
    id: '',
    name: 'Все',
    categories: []
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategory (state, action) {
            state.name = action.payload.name
            state.id = action.payload.id
        },
        setCategories (state, action) {
            state.categories = action.payload
        }
    }
})

export const { setCategory, setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer

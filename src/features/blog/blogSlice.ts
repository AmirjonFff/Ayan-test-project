import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BlogState {
    value: number,
    currentPage: number;
    itemsPerPage: number;
}

const initialState: BlogState = {
    value: 0,
    currentPage: 1,
    itemsPerPage: 10,
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setItemsPerPage(state, action: PayloadAction<number>) {
            state.itemsPerPage = action.payload;
            state.currentPage = 1;
        },
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { setCurrentPage, setItemsPerPage, increment, decrement, incrementByAmount } = blogSlice.actions

export default blogSlice.reducer
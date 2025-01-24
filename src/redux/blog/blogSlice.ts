import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface BlogState {
    query: string;
    currentPage: number;
    itemsPerPage: number;
}

const initialState: BlogState = {
    query: '',
    currentPage: 1,
    itemsPerPage: 10,
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setItemsPerPage(state, action: PayloadAction<number>) {
            state.itemsPerPage = action.payload;
            state.currentPage = 1;
        },
    },
})

export const { setQuery, setCurrentPage, setItemsPerPage } = blogSlice.actions

export default blogSlice.reducer
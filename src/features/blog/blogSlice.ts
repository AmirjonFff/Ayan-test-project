import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../type';

export interface BlogState {
    query: string;
    modalPost: IPost | {};
    currentPage: number;
    itemsPerPage: number;
}

const initialState: BlogState = {
    query: '',
    modalPost: {},
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
        setModalPost(state, action: PayloadAction<IPost>) {
            state.modalPost = action.payload;
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

export const { setQuery, setModalPost, setCurrentPage, setItemsPerPage } = blogSlice.actions

export default blogSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import blogReducer from '../redux/blog/blogSlice'

export const store = configureStore({
    reducer: {
        blog: blogReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
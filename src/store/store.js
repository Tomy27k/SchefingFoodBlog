import { configureStore } from '@reduxjs/toolkit'
import  blogs  from './slices/Blogs/BlogsSlice'

export const store = configureStore({
  reducer: {
    blogs:blogs,
  },
});
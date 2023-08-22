import { configureStore } from '@reduxjs/toolkit'
import { booksReducer } from './booksSlise'
import { newBooksReducer } from './newBooksSlice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    newBooks: newBooksReducer,
  }
})

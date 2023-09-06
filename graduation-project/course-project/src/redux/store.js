import { configureStore } from '@reduxjs/toolkit'
import { newBooksReducer } from './newBooksSlice'
import { bookReducer } from './bookSlice'
import { favoriteReducer } from './favoriteSlice'

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookDetails: bookReducer,
    favorite: favoriteReducer,
  }
})

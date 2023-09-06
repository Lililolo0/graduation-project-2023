import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesBooks: [],
  },

  reducers: {
    setFavorites: (state, action) => {
      const updatedBooks = Array.from(action.payload)
      updatedBooks.forEach((book) => {
        const index = state.favoritesBooks.findIndex((favBook) => favBook.isbn13 === book.isbn13)

        if (index !== -1) {
          state.favoritesBooks[index] = { ...state.favoritesBooks[index], ...book }
        } else {
          state.favoritesBooks.push(book)
        }
      })
      localStorage.setItem('favoritesBooks', JSON.stringify(state.favoritesBooks))
    },
  }
})

export const { setFavorites, setFavoritesCount } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer

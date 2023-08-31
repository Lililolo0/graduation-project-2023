import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestBooks } from '../servises/posts'

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  return await requestBooks()
})


const booksSlice = createSlice({
  name: 'books',
  initialState: {
    loading: false,
    error: null,
    data: []
  },

  extraReducers: builder => {
    builder.addCase(fetchBooks.pending, state => {
      state.loading = true
    })

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false
      state.error = 'Что-то пошло не так'
    })
  }
})

export { fetchBooks }
export const booksReducer = booksSlice.reducer

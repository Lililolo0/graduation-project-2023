import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestNewBooks, requestSearchBooks } from '../servises/books'

const fetchNewBooks = createAsyncThunk('books/fetchNewBooks', async () => {
return await requestNewBooks()
})

// не забыть добавить страницы, когда сделаю пагинацию
const fetchSearchBooks = createAsyncThunk('books/fetchSearchBooks', async (query) => {
return await requestSearchBooks(query)
})


const newBooksSlice = createSlice({
  name: 'newBooks',
  initialState: {
    data: [],
    loading: false,
    error: null,
    // pagesCounter: 0,
    // limit: 10,
  },

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchNewBooks.pending, state => {
      state.loading = true
    })

    builder.addCase(fetchNewBooks.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })

    builder.addCase(fetchNewBooks.rejected, (state) => {
      state.loading = false
      state.error = 'Что-то пошло не так'
    })
  }
})

export { fetchNewBooks, fetchSearchBooks }
export const newBooksReducer = newBooksSlice.reducer

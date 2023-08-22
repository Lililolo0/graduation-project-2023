import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestNewBooks, requestBooks } from '../servises/posts'

const fetchNewBooks = createAsyncThunk('new/fetchNewBooks', async () => {


  return await requestNewBooks()
})


const newBooksSlice = createSlice({
  name: 'newBooks',
  initialState: {
    loading: false,
    error: null,
    data: []
  },

  extraReducers: builder => {
    builder.addCase(fetchNewBooks.pending, state => {
      state.loading = true
    })

    builder.addCase(fetchNewBooks.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })

    builder.addCase(fetchNewBooks.rejected, (state, action) => {
      state.loading = false
      state.error = 'Что-то пошло не так'
    })
  }
})

export { fetchNewBooks }
export const newBooksReducer = newBooksSlice.reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestBookById } from '../servises/books'


export const fetchBook = createAsyncThunk('bookDetails/fetchBook', async (isbn13) => {
  const bookDetails = await requestBookById(isbn13)
  return bookDetails
})


const bookSlice = createSlice({
  name: 'bookDetails',
  initialState: {
    bookDetails: {},
    loadingDetails: false,
    errorDetails: false
  },

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchBook.pending, state => {
      state.loadingDetails = true
    })
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.loadingDetails = false
      state.bookDetails = action.payload
    })
    builder.addCase(fetchBook.rejected, state => {
      state.loadingDetails = false
      state.errorDetails = true
    })
  }
})

export const bookReducer = bookSlice.reducer

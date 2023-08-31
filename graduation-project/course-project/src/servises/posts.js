import { client } from '../utils/client'
import { booksEndpoint, newBooksEndpoint } from '../api'

export const requestBooks = async (search = '') => {
  const { data } = await client.get(booksEndpoint, {
    params: {
      search,
    }
  })

  return data.books
}


export const requestNewBooks = async (search = '') => {
  const { data } = await client.get(newBooksEndpoint, {
    params: {
      search,
    }
  })
  return data.books
}

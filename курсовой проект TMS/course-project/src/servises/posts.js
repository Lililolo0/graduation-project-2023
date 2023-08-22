import { client } from '../utils/client'
import { booksEndpoint, newBooksEndpoint } from '../api'

export const requestBooks = async () => {
  const {data} = await client.get(booksEndpoint, {
  })

  return data.books
}


export const requestNewBooks = async () => {
  const {data} = await client.get(newBooksEndpoint, {
  })
  return data.books
}

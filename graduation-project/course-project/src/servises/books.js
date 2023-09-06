import { client } from '../utils/client'
import { bookEndpoint, newBooksEndpoint, searchEndpoint } from '../api'


// Запрос на все-все книги для отрисовки главной страницы
export const requestNewBooks = async () => {
  const { data } = await client.get(newBooksEndpoint)
  return data.books
}

// Запрос на ID
export const requestBookById = async (isbn13) => {
  const { data } = await client.get(`${bookEndpoint}/${isbn13}`)
  return data
  // .books
}


export const requestSearchBooks = async (query,) => {
  const { data } = await client.get(searchEndpoint + '/' + query )  // + '/' + page
  return data
}


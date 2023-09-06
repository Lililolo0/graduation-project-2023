import { setFavorites } from '../redux/favoriteSlice'


export function toggleFavorite( data, isFavorite, dispatch) {

  let updatedFavorites = [...JSON.parse(localStorage.getItem('favoritesBooks') || '[]')]


  if (!isFavorite) {
    updatedFavorites = updatedFavorites.filter(book => book.isbn13 !== data.isbn13)

  } else {
    updatedFavorites = [...updatedFavorites, data]

  }

  dispatch(setFavorites(updatedFavorites))
  localStorage.setItem('favoritesBooks', JSON.stringify(updatedFavorites))
}

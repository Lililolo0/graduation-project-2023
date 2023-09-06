import './Favorites.scss'
import { CardFavorite } from '../../components/CardFavorite/CardFavorite'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorites } from '../../redux/favoriteSlice'

export function Favorites() {
  const dispatch = useDispatch()
  const { favoritesBooks } = useSelector((state) => state.favorite)


  useEffect(() => {
    const favoritesBooks = JSON.parse(localStorage.getItem('favoritesBooks') || '[]')
    dispatch(setFavorites(favoritesBooks))
  }, [])

  function renderFavorites() {
    return favoritesBooks.map((book) => (
      <CardFavorite key={book.isbn13} data={book} />
    ))
  }


  return (
    <div className='favorites'>
      <div className='container' style={{ width: '1120px' }}>
        <div className='favorites-inner'>
          <h1>FAVORITES</h1>
          <div className='favorites__cards'>
            {'No favorites' && renderFavorites()}
          </div>
        </div>
      </div>

    </div>
  )
}

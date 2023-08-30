import './Favorites.scss'
import { CardFavorite } from '../../components/CardFavorite/CardFavorite'

export function Favorites() {

  return (
    <div className='favorites'>
      <div className='container'>
        <div className='favorites-inner'>
          <CardFavorite />
        </div>
      </div>

    </div>
  )
}

import like from '../../images/like.svg'
import { NavLink } from 'react-router-dom'

export function FavoritesLink() {
  return (
    <div>
      <NavLink to='/favorites'>
        <img src={like} alt="favorites" />
      </NavLink>
    </div>
  )
}

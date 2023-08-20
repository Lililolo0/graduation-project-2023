import { Label } from '../Label/Label'
import { Search } from '../Search/Search'
import { Favorites } from '../Favorites/Favorites'
import { Basket } from '../Basket/Basket'
import { User } from '../User/User'
import './Header.scss'


export function Header() {
  return (
    <div className='header'>
      <div className='container' style={{ width: '1120px' }}>
        <div className='header__inner'>
        <Label />
        <Search />
        <div className='header__links'>
          <Favorites />
          <Basket />
          <User />
        </div>
      </div>
      </div>
    </div>
  )
}

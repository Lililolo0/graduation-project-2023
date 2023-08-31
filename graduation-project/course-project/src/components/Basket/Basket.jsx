import basket from '../../images/basket.svg'
import { NavLink } from 'react-router-dom'

export function Basket() {
  return (
    <div>
      <NavLink to='/cart'>
        <img src={basket} alt="basket" />
      </NavLink>
    </div>
  )
}

import avatar from '../../images/avatar.svg'
import { NavLink } from 'react-router-dom'


export function User() {
  return (
    <div>
      <NavLink to='/account'>
        <img src={avatar} alt="user" />
      </NavLink>
    </div>
  )
}

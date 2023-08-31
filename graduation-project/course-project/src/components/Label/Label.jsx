import './Label.scss'
import { NavLink } from 'react-router-dom'

export function Label() {
  return (
    <div className='label'>
      <NavLink to='/' className='link'>BOOKSTORE</NavLink>
    </div>
  )
}

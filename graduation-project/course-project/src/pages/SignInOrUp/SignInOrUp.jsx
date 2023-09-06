import './SignInOrUp.scss'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export function SignInOrUp() {
  return (
    <div className='sign-in-or-up'>
      <div className='sign-in-or-up__inner'>
        <div className='switcher'>
          <NavLink to='/sign-in-or-up/sign-in' className='switcher__link'><button>Sign in</button></NavLink>
          <NavLink to='/sign-in-or-up/sign-up' className='switcher__link'><button>Sign up</button></NavLink>
        </div>

        <Outlet />

      </div>
    </div>
  )
}

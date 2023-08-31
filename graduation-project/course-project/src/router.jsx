import { createBrowserRouter } from 'react-router-dom'
import { Main } from './components/Main/Main'
import { AllBooks } from './pages/AllBooks/AllBooks'
import { Book } from './pages/Book/Book'
import { Cart } from './pages/Cart/Cart'
import { Favorites } from './pages/Favorites/Favorites'
import { SearchPage } from './pages/SearchPage/SearchPage'
import { Account } from './pages/Account/Account'
import { SignIn } from './pages/SignIn/SignIn'

import { SignUp } from './pages/SignIn/SignUp'



export const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: '/',
        element: <AllBooks />
      },
      {
        path: '/book',
        element: <Book/>
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: '/search-page/:query',
        element: <SearchPage />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/sign-in',
        element: <SignIn />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
    ]
  }
])

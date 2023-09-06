import { createBrowserRouter } from 'react-router-dom'
import { Main } from './components/Main/Main'
import { AllBooks } from './pages/AllBooks/AllBooks'
import { Book } from './pages/Book/Book'
import { Cart } from './pages/Cart/Cart'
import { Favorites } from './pages/Favorites/Favorites'
import { SearchPage } from './pages/SearchPage/SearchPage'
import { Account } from './pages/Account/Account'
import { SignInOrUp } from './pages/SignInOrUp/SignInOrUp'
import { SignIn } from './components/SignIn/SignIn'
import { SignUp } from './components/SignUp/SignUp'



export const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: '/',
        element: <AllBooks />
      },
      {
        path: '/book/:isbn13',
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
        path: '/sign-in-or-up',
        element: <SignInOrUp />,
          children: [
            {
              path: '/sign-in-or-up/sign-in',
              element: <SignIn />
            },
            {
              path: '/sign-in-or-up/sign-up',
              element: <SignUp />
            }
          ]
      }
      // {
      //   path: '/sign-in',
      //   element: <SignIn />
      // },
      // {
      //   path: '/sign-up',
      //   element: <SignUp />
      // },
    ]
  }
])

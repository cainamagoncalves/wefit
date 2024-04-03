import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Home } from './pages/app/home'
import { Cart } from './pages/cart'
import { Success } from './pages/success'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cart', element: <Cart /> },
      { path: '/success', element: <Success /> },
    ],
  },
])

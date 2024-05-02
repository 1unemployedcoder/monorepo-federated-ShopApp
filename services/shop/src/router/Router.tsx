import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/App'
import ProductPage from '@/pages/ProductPage'
import Products from '@/pages/Products'
import NewsItemPage from '@/pages/NewsItemPage'
import Cart from '@/pages/Cart'
import Undefined from '@/pages/Undefined'
import AuthPage from '@/pages/AuthPage'

const routes = [
    {
        path: '/shop',
        element: <App />,
        children: [
            {
                path: '/shop/products/:id',
                element: <ProductPage />
            },
            {
                path: '/shop/products/*',
                element: <Products />
            },
            {
                path: '/shop/news/:id',
                element: <NewsItemPage />
            },
            {
                path: '/shop/cart',
                element: <Cart />
            },
            {
                path: '/shop/*',
                element: <Undefined />
            },
            {
                path: '/shop/auth',
                element: <AuthPage />
            }
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes

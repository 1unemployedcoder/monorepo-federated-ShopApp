import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/App'
import ProductPage from '@/pages/ProductPage'
import Products from '@/pages/Products'
import NewsItemPage from '@/pages/NewsItemPage'
import Cart from '@/pages/Cart'
import Undefined from '@/pages/Undefined'

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
                path: '/shop/products/:type/*',
                element: <Products />
            },
            {
                path: '/shop/products/:type',
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
            }
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes

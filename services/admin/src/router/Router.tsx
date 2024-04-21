import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/Components/App'
import ProductList from "@/pages/ProductList";

const routes = [
    {
        path: '/admin',
        element: <App />,
        children: [
            {
                path: '/admin/products',
                element: <ProductList />,
            },
        ]
    }
]
export const router = createBrowserRouter(routes)

export default routes

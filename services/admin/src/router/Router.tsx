import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/Components/App'
import ProductList from "@/pages/ProductList";
import LogInPage from "@/pages/LogInPage";

const routes = [
    {
        path: '/admin',
        element: <App />,
        children: [
            {
                path: '/admin/products',
                element: <ProductList />,
            },
            {
                path: '/admin/login',
                element: <LogInPage />,
            },
        ]
    }
]
export const router = createBrowserRouter(routes)

export default routes

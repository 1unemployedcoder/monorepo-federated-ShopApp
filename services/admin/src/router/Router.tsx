import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/Components/App'
import ProductList from "@/pages/ProductList";
import LogInPage from "@/pages/LogInPage";
import NewsList from "@/pages/NewsList";
import SupportPage from "@/pages/SupportPage";

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
                path: '/admin/news',
                element: <NewsList />,
            },
            {
                path: '/admin/login',
                element: <LogInPage />,
            },
            {
                path: '/admin/support',
                element: <SupportPage />,
            },
        ]
    }
]
export const router = createBrowserRouter(routes)

export default routes

import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/Components/App'

const routes = [
    {
        path: '/admin',
        element: <App />,
    }
]
export const router = createBrowserRouter(routes)

export default routes

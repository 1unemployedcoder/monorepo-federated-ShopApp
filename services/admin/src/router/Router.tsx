import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/Components/App/App'
import { Suspense } from 'react'
import { AboutLazy } from '@/pages/about/About.lazy'

const routes = [
    {
        path: '/admin',
        element: <App />,
        children: [
            {
                path: '/admin/about',
                element:
                    <Suspense fallback={<>Загрузка...</>}>
                        <AboutLazy />
                    </Suspense>
            }
        ]
    }
]
export const router = createBrowserRouter(routes)

export default routes

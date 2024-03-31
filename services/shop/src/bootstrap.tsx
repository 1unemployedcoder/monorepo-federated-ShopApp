import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router/Router'

const rootElement = document.getElementById('root')

if (rootElement != null) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <RouterProvider router={router}/>
    )
}

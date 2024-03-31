import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router/Router'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const rootElement = document.getElementById('root')

if (rootElement != null) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    )
}

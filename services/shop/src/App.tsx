import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import cl from './styles/modules/App.module.scss'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

export const App = (): React.ReactNode => {
    return (
        <div className={cl.App}>
            <Provider store={store}>
                <Navbar/>
                <Outlet/>
            </Provider>
        </div>
    )
}

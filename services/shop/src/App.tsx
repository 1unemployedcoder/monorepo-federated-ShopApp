import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './styles/styles'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

export const App = (): React.ReactNode => {
    return (
        <Provider store={store}>
            <Navbar/>
            <Outlet/>
        </Provider>
    )
}

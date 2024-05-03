import React from 'react'
import { Outlet, useOutlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import cl from './styles/modules/App.module.scss'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import MainPage from '@/pages/MainPage'
import { useOutletEmpty } from '@/hooks/useOutletEmpty'
import { Chat } from '@/components/ChatSupport/Chat'

export const App = (): React.ReactNode => {
    const outlet = useOutlet()
    const isOutletEmpty = useOutletEmpty(outlet)
    return (
        <div className={cl.App}>
            <Provider store={store}>
                <Navbar/>
                {isOutletEmpty ? <MainPage/> : <Outlet />}
                <Chat />
            </Provider>
        </div>
    )
}

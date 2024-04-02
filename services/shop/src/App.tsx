import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './styles/styles'
import cl from './styles/App.module.scss'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { StyledApp } from '@/components/ui/styledComponents/styledApp'

export const App = (): React.ReactNode => {
    return (
        <div className={cl.App}>
            <StyledApp>
                <Provider store={store}>
                    <Navbar/>
                    <Outlet/>
                </Provider>
            </StyledApp>
        </div>
    )
}

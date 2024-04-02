import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './styles/styles'
import cl from './styles/App.module.scss'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import styled from 'styled-components'

const StyledApp = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Nunito', serif;
`

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

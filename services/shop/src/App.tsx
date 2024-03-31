import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './styles/styles'
export const App = (): React.ReactNode => {
    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    )
}

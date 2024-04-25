import React from 'react'
import { Outlet, useOutlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'
import LogInPage from '@/pages/LogInPage'
import ProductList from '@/pages/ProductList'
import { useOutletEmpty } from '@packages/shared'
const IsAuth = () => {
    const { status, isAuth } = useSelector((state: RootState) => state.auth)
    const outlet = useOutlet()
    const isOutletEmpty = useOutletEmpty(outlet)
    if (status === 'loading') {
        return 'Загрузка...'
    }
    if (isAuth) {
        return isOutletEmpty ? <ProductList /> : <Outlet />
    } else {
        return <LogInPage />
    }
}

export default IsAuth

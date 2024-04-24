import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CartButton from './NavbarComponents/CartButton'
import LogInModal from './NavbarComponents/LogInModal'
import BtnPrimary from '../ui/styledComponents/styledButton/BtnPrimary'
import SearchNav from './NavbarComponents/SearchNav'
import cl from '@/styles/modules/Navbar.module.scss'
import { useAppDispatch } from '@/redux/store'
import { checkAuth } from '@/redux/slices/authSlice'
const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(checkAuth())
    }, [])
    return (
        <nav className={cl.navbar}>
            <div className={cl.navbar__content}>
                <BtnPrimary className={cl.white} onClick={() => { navigate('/shop/') }}>SHOP</BtnPrimary>
                <SearchNav />
                <CartButton/>
                <LogInModal/>
            </div>
        </nav>
    )
}

export default Navbar

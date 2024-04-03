import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartButton from './NavbarComponents/CartButton'
import LogInModal from './NavbarComponents/LogInModal'
import BtnPrimary from '../ui/styledComponents/styledButton/BtnPrimary'
import SearchNav from './NavbarComponents/SearchNav'
import cl from '@/styles/modules/Navbar.module.scss'
const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={cl.navbar}>
            <div className={cl.navbar__content}>
                <BtnPrimary className={cl.white} onClick={() => { navigate('/shop/main') }}>SHOP</BtnPrimary>
                <SearchNav />
                <CartButton/>
                <LogInModal/>
            </div>
        </nav>
    )
}

export default Navbar

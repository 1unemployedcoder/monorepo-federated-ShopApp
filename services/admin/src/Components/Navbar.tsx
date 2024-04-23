import {AppBar, Toolbar, Typography, Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { type RootState, useAppDispatch } from '@/redux/store'
import { checkAuth, setAuth } from '@/redux/slices/authSlice'
import { useSelector } from 'react-redux'
import CategoryIcon from '@mui/icons-material/Category';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
const Navbar = () => {
    const { user, isAuth } = useSelector((state: RootState) => state.auth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const logOut = () => {
        dispatch(setAuth({ user: 'User', isAuth: false }))
        localStorage.removeItem('token')
        navigate('/admin/')
    }
    useEffect(() => {
        dispatch(checkAuth())
    }, [])
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Админ панель
                </Typography>
                <Button color="inherit" component={Link} to="/admin/products" startIcon={<CategoryIcon />} sx={{ mr: 1 }}>
                    Продукты
                </Button>
                <Button color="inherit" component={Link} to="/admin/news" startIcon={<NewspaperIcon />}>Новости</Button>
                <Button color="inherit" component={Link} to="/admin/support" startIcon={<ChatIcon />}>Чат техподдержки</Button>
                {isAuth
                    ? <>
                        <Typography>
                            <AccountCircleIcon />
                        </Typography>
                        <Typography>
                            {user}
                        </Typography>
                        <Button variant="outlined" onClick={logOut} color='inherit' startIcon={<LoginIcon />}>Выйти</Button>
                    </>
                    : <Button color='inherit' component={Link} to="/admin/login" startIcon={<LoginIcon />}>Войти</Button>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

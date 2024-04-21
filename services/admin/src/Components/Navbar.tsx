import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import {useEffect} from "react";
import {RootState, useAppDispatch} from "@/redux/store";
import {checkAuth, setAuth} from "@/redux/slices/authSlice";
import {useSelector} from "react-redux";

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
                <Button color="inherit" component={Link} to="/admin/products">Продукты</Button>
                <Button color="inherit" component={Link} to="/admin/news">Новости</Button>
                {isAuth ?
                    <>
                        <Typography>
                            {user}
                        </Typography>
                        <Button onClick={logOut} color='inherit'>Выйти</Button>
                    </>
                        : <Button color='inherit' component={Link} to="/admin/login">Войти</Button>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

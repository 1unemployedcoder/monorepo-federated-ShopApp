import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Админ панель
                </Typography>
                <Button color="inherit" component={Link} to="/admin/products">Продукты</Button>
                <Button color="inherit" component={Link} to="/admin/news">Новости</Button>
                <Button color='inherit' component={Link} to="/admin/login">Войти</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: '#333' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                    Админ панель
                </Typography>
                <Button color="inherit" component={Link} to="/admin/news" sx={{ color: 'white' }}>Новости</Button>
                <Button color="inherit" component={Link} to="/admin/products" sx={{ color: 'white' }}>Продукты</Button>
                <Button color="inherit" component={Link} to="/admin/create-news" sx={{ color: 'white' }}>Создание новости</Button>
                <Button color="inherit" component={Link} to="/admin/create-product" sx={{ color: 'white' }}>Создание продукта</Button>
                <Button color="inherit" component={Link} to="/admin/chat" sx={{ color: 'white' }}>Чат</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

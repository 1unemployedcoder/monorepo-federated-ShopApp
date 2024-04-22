import {
    Alert,
    Avatar,
    Box, Button,
    Container,
    TextField,
    Typography
} from '@mui/material'
import React, {useEffect} from 'react'
import { type RootState, useAppDispatch } from '@/redux/store'
import { loger } from '@/redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const LogInPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { isAuth, status } = useSelector((state: RootState) => state.auth)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        await dispatch(loger({
            name: data.get('login'),
            password: data.get('password')
        }))
    }
    useEffect(() => {
        if (status === 'success' && isAuth) {
            navigate('/admin/')
        }
    }, [status])
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                        Вход
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="login"
                        label="Логин"
                        name="login"
                        autoComplete="login"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                            Войти
                    </Button>
                </Box>
            </Box>
            {status === 'error' &&
                <Alert severity="error">
                    Ошибка авторизации
                </Alert>
            }
        </Container>
    )
}

export default LogInPage

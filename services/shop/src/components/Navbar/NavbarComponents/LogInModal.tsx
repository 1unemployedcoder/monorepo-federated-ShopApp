import React, { useState } from 'react'
import MyModal from '../../ui/modal/MyModal'
import BtnPrimary from '../../ui/styledComponents/styledButton/BtnPrimary'
import BtnOrdinary from '../../ui/styledComponents/styledButton/BtnOrdinary'
import InputMain from '../../ui/styledComponents/styledInput/InputMain'
import cl from '@/styles/modules/Navbar.module.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {type RootState, useAppDispatch} from '@/redux/store'
import {setAuth} from "@/redux/slices/authSlice";
const LogInModal = () => {
    const [modal, setModal] = useState<boolean>(false)
    const navigate = useNavigate()
    const { user, isAuth, status } = useSelector((state: RootState) => state.auth)
    const dispatch = useAppDispatch()
    const toAuth = () => {
        navigate('/shop/auth')
        setModal(false)
    }
    const logOut = () => {
        dispatch(setAuth({user: 'User', isAuth: false}))
        localStorage.removeItem('token')
        navigate('/shop/')
    }

    return (
        <div>
            {status === 'loading'
                ? <div className={cl.loading}/>
                : isAuth
                    ? <div className={cl.authContainer}>
                        <div className={cl.authorized}>{user}</div>
                        <BtnPrimary onClick={logOut}>Выйти</BtnPrimary>
                    </div>
                    : <BtnPrimary onClick={() => { setModal(true) }}>Вход</BtnPrimary>

            }
            <MyModal active={modal} setActive={setModal}>
                <div className={cl.loginModal}>
                    <h3>Авторизация</h3>
                    <InputMain
                        placeholder='Логин'
                    />
                    <InputMain
                        placeholder='Пароль'
                    />
                    <BtnPrimary>Вход</BtnPrimary>
                    <BtnOrdinary onClick={toAuth}>У меня нет аккаунта</BtnOrdinary>
                </div>
            </MyModal>
        </div>
    )
}

export default LogInModal

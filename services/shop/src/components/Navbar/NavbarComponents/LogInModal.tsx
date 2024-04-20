import React, { useState } from 'react'
import MyModal from '../../ui/modal/MyModal'
import BtnPrimary from '../../ui/styledComponents/styledButton/BtnPrimary'
import BtnOrdinary from '../../ui/styledComponents/styledButton/BtnOrdinary'
import InputMain from '../../ui/styledComponents/styledInput/InputMain'
import cl from '@/styles/modules/Navbar.module.scss'
import {useNavigate} from "react-router-dom";
const LogInModal = () => {
    const [modal, setModal] = useState<boolean>(false)
    const navigate = useNavigate()
    const toAuth = () => {
        navigate('/shop/auth')
        setModal(false)
    }
    return (
        <div>
            <BtnPrimary onClick={() => { setModal(true) }}>Вход</BtnPrimary>
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

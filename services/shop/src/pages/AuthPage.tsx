import InputMain from '@/components/ui/styledComponents/styledInput/InputMain'
import BtnPrimary from '@/components/ui/styledComponents/styledButton/BtnPrimary'
import React, { useState } from 'react'
import cl from '@/styles/modules/AuthPage.module.scss'
import { type AuthUser } from '@/@types/typesComponents'
import { registration } from '@/API/htttpSettings'
import { useNavigate } from 'react-router-dom'
import {useAppDispatch} from "@/redux/store";
import {register} from "@/redux/slices/authSlice";
const AuthPage = () => {
    const [user, setUser] = useState<AuthUser>({ name: '', password: '' })
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const signIn = async (e: any) => {
        e.preventDefault()
        dispatch(register(user))
        navigate('/shop/')
    }
    return (
        <div className={cl.contentAuth}>
            <form className={cl.defForm}>
                <h3>Регистрация</h3>
                <InputMain
                    placeholder='Логин'
                    autoComplete="name"
                    onChange={e => {
                        setUser({
                            ...user,
                            name: e.target.value
                        })
                    }}
                />
                <InputMain
                    placeholder='Пароль'
                    type="password"
                    autoComplete="current-password"
                    onChange={e => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }}
                />
                <BtnPrimary onClick={signIn}>Зарегистрироваться</BtnPrimary>
            </form>
        </div>
    )
}

export default AuthPage

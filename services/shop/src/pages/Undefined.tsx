import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setCategory } from '@/redux/slices/categoriesSlice'
import BtnOrdinary from '../components/ui/styledComponents/styledButton/BtnOrdinary'
import { useAppDispatch } from '@/redux/store'
import { Helmet } from 'react-helmet'
import cl from '@/styles/modules/Undefined.module.scss'
const Undefined = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setCategory({
            id: '',
            name: 'Все'
        }))
    }, [dispatch])
    return (
        <div data-testid='undefinedLink' className={cl.undefined}>
            <Helmet>
                <title>
                    SHOP | Ошибка
                </title>
            </Helmet>
            <h1 className={cl.undefined__modifier}>
                Ошибка 404
            </h1>
            <div className={`${cl.undefined__desc} ${cl.undefined__modifier}`}>
                Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она
                устарела,
                была удалена, или был введен неверный адрес в адресной строке.
            </div>
            <div className={cl.undefined__modifier}>
                <BtnOrdinary onClick={() => { navigate('/shop/main/') }}>На главную</BtnOrdinary>
            </div>
        </div>
    )
}

export default Undefined

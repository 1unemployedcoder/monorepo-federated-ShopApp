import React from 'react'
import BtnOrdinary from '../../ui/styledComponents/styledButton/BtnOrdinary'
import { type ErrorRefreshProps } from '@/@types/typesComponents'
import cl from '@/styles/modules/ErrorRefresh.module.scss'
const ErrorRefresh: React.FC<ErrorRefreshProps> = ({ error, refreshPage }) => {
    return (
        <div className={cl.errorRefresh}>
            <div className={cl.title}>Возникла ошибка: {error}</div>
            <BtnOrdinary onClick={() => refreshPage ? refreshPage('') : null}>Обновить</BtnOrdinary>
        </div>
    )
}

export default ErrorRefresh

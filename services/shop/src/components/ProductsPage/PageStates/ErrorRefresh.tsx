import React from 'react';
import BtnOrdinary from "../../ui/styledComponents/styledButton/BtnOrdinary";
import {ErrorRefreshProps} from "../../../@types/typesComponents";

const ErrorRefresh: React.FC<ErrorRefreshProps> = ({error, refreshPage}) => {
    return (
        <div className='errorRefresh'>
            <div className='title'>Возникла ошибка: {error}</div>
            <BtnOrdinary onClick={() => refreshPage ? refreshPage('') : null}>Обновить</BtnOrdinary>
        </div>
    );
};

export default ErrorRefresh;
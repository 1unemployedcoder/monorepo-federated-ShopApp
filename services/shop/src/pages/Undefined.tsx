import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {setCategory} from "../redux/slices/categoriesSlice";
import BtnOrdinary from "../components/ui/styledComponents/styledButton/BtnOrdinary";
import {useAppDispatch} from "../redux/store";
import {Helmet} from "react-helmet";

const Undefined = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setCategory({
            value: {
                value: 'all'
            },
            name: 'Все'
        }));
    }, [dispatch]);
    return (
        <div className='undefined'>
            <Helmet>
                <title>
                    SHOP | Ошибка
                </title>
            </Helmet>
            <h1 className='undefined__modifier'>
                Ошибка 404
            </h1>
            <div className='undefined__desc undefined__modifier'>
                Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она
                устарела,
                была удалена, или был введен неверный адрес в адресной строке.
            </div>
            <div className='undefined__button undefined__modifier'>
                <BtnOrdinary onClick={() => navigate('/shop/')}>На главную</BtnOrdinary>
            </div>
        </div>
    );
};

export default Undefined;

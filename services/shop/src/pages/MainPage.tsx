import React, {useEffect, useState} from 'react';
import {setCategory} from "../redux/slices/categoriesSlice";
import Carousel from "../components/MainPage/Carousel/Carousel";
import Categories from "../components/MainPage/Categories/Categories";
import NewsList from "../components/MainPage/News/NewsList";
import IFButton from "../components/ui/styledComponents/styledButton/IF_Button";
import {MainTabs} from "../@types/types";
import {useAppDispatch} from "../redux/store";
import {Helmet} from "react-helmet";
const MainPage = () => {
    const [activeTab, setActiveTab] = useState<MainTabs>('popular')
    localStorage.setItem('currentCategoryName', 'Все')
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
        <div className='mainPage'>
            <Helmet>
                <title>
                    SHOP | Главная
                </title>
            </Helmet>
            <div className='mainPage__container'>
                <div className='mainPage__title'>
                    Главная
                </div>
                <h3>Категории:</h3>
                <div className='mainPage__categories'>
                    <Categories />
                </div>
            </div>
            <div className="mainPage__products">
                <div className="titles__container">
                    <div className="mainPage__titleProducts">
                        <IFButton primary={activeTab === 'popular'}
                            className='mainPage__titleProducts'
                            onClick={() => setActiveTab('popular')}>
                            Популярное
                        </IFButton>
                    </div>
                    <div className="mainPage__titleProducts">
                        <IFButton primary={activeTab === 'news'}
                            className='mainPage__titleProducts'
                            onClick={() => setActiveTab('news')}>
                            Новости
                        </IFButton>
                    </div>
                </div>
                {activeTab === 'popular' && (
                    <div className="carousel">
                        <Carousel/>
                    </div>
                )}
                {activeTab === 'news' && (
                    <div className='news'>
                        <NewsList />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainPage;
import React, {ReactNode, useEffect, useState} from 'react'
import { setCategory } from '@/redux/slices/categoriesSlice'
import Carousel from '../components/MainPage/Carousel/Carousel'
import Categories from '../components/MainPage/Categories/Categories'
import NewsList from '../components/MainPage/News/NewsList'
import IFButton from '../components/ui/styledComponents/styledButton/IF_Button'
import { type MainTabs } from '@/@types/types'
import { useAppDispatch } from '@/redux/store'
import { Helmet } from 'react-helmet'
import cl from '@/styles/modules/MainPage.module.scss'
import news from '@/styles/modules/News.module.scss'
import cat from '@/styles/modules/Categories.module.scss'
const MainPage = (): ReactNode => {
    const [activeTab, setActiveTab] = useState<MainTabs>('popular')
    localStorage.setItem('currentCategoryName', 'Все')
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setCategory({
            value: {
                value: 'all'
            },
            name: 'Все'
        }))
    }, [dispatch])

    return (
        <div className={cl.mainPage}>
            <Helmet>
                <title>
                    SHOP | Главная
                </title>
            </Helmet>
            <div className={cl.mainPage__container}>
                <div className={cl.mainPage__title}>
                    Главная
                </div>
                <h3>Категории:</h3>
                <div className={cat.categories}>
                    <Categories />
                </div>
            </div>
            <div className={cl.mainPage__products}>
                <div className={cl.titles__container}>
                    <div className={cl.mainPage__titleProducts}>
                        <IFButton primary={activeTab === 'popular'}
                            className={cl.mainPage__titleProducts}
                            onClick={() => { setActiveTab('popular') }}>
                            Популярное
                        </IFButton>
                    </div>
                    <div className={cl.mainPage__titleProducts}>
                        <IFButton primary={activeTab === 'news'}
                            className={cl.mainPage__titleProducts}
                            onClick={() => { setActiveTab('news') }}>
                            Новости
                        </IFButton>
                    </div>
                </div>
                {activeTab === 'popular' && (
                    <div className={cl.carousel}>
                        <Carousel/>
                    </div>
                )}
                {activeTab === 'news' && (
                    <div className={news.news}>
                        <NewsList />
                    </div>
                )}
            </div>
        </div>
    )
}

export default MainPage

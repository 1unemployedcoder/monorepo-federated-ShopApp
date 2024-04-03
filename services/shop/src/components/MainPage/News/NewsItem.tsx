import React from 'react'
import { useNavigate } from 'react-router-dom'
import BtnOrdinary from '../../ui/styledComponents/styledButton/BtnOrdinary'
import BtnPrimary from '../../ui/styledComponents/styledButton/BtnPrimary'
import { type NewsItemProps } from '@/@types/typesComponents'
import cl from '@/styles/modules/News.module.scss'

const NewsItem: React.FC<NewsItemProps> = ({ author, img, desc, date, title, id, comms, isOpen }) => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className={cl.news__item}>
            {isOpen &&
                <div className={cl.backBtn}>
                    <BtnPrimary onClick={handleGoBack}>Назад</BtnPrimary>
                </div>
            }
            <div className={cl.news__etc}>
                <p>{date}</p>
                <p>{author}</p>
                {!isOpen &&
                    <p className={cl.gold}>&#128172;{comms}</p>
                }
            </div>
            <img className={cl.news__img}
                src={img}
                alt={title}/>
            <h2 className={cl.news__title}>
                {title}
            </h2>
            <p className={cl.news__desc}>
                {desc}
            </p>
            {!isOpen &&
                <BtnOrdinary className={cl.news__btn} onClick={() => { navigate(`/news/${id}`) }}>
                    Открыть
                </BtnOrdinary>
            }
        </div>
    )
}

export default NewsItem

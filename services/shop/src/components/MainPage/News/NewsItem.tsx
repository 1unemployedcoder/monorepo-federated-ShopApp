import React from 'react';
import {useNavigate} from "react-router-dom";
import BtnOrdinary from "../../ui/styledComponents/styledButton/BtnOrdinary";
import BtnPrimary from "../../ui/styledComponents/styledButton/BtnPrimary";
import {NewsItemProps} from "../../../@types/typesComponents";

const NewsItem: React.FC<NewsItemProps> = ({ author, img, desc, date, title, id, comms, isOpen }) => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    };
    return (
        <div className="news__item">
            {isOpen &&
                <div className="backBtn">
                    <BtnPrimary onClick={handleGoBack}>Назад</BtnPrimary>
                </div>
            }
            <div className='news__etc'>
                <p>{date}</p>
                <p>{author}</p>
                {!isOpen &&
                    <p className='gold'>&#128172;{comms}</p>
                }
            </div>
            <img className='news__img'
                 src={img}
                 alt={title}/>
            <h2 className='news__title'>
                {title}
            </h2>
            <p className='news__desc'>
                {desc}
            </p>
            {!isOpen &&
                <BtnOrdinary className='news__btn' onClick={() => navigate(`/news/${id}`)}>
                    Открыть
                </BtnOrdinary>
            }
        </div>
    );
};

export default NewsItem;
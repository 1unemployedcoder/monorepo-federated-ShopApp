import Styles from './Card.module.scss'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useNavigate } from 'react-router-dom'
import BtnPrimary from '../styledComponents/styledButton/BtnPrimary'
import { type CardProps } from '@/@types/typesComponents'

const Card: React.FC<CardProps> = ({ image, name, id }) => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const props3 = useSpring({
        transform: show ? 'scale(1.03)' : 'scale(1)',
        boxShadow: show
            ? '0 20px 25px rgb(0 0 0 / 25%)'
            : '0 2px 10px rgb(0 0 0 / 8%)'
    })
    return (
        <animated.div
            className={Styles.card}
            style={props3}
            onMouseEnter={() => { setShow(true) }}
            onMouseLeave={() => { setShow(false) }}
        >
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <div className={Styles.btnn}>
                <BtnPrimary onClick={() => { navigate(`/shop/products/${id}`) }}>
                    Открыть
                </BtnPrimary>
            </div>
        </animated.div>
    )
}

export default Card

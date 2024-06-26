import React, { useState, useEffect } from 'react'
import { type ProductCommentsTypes } from '@/@types/types'
import cl from '@/styles/modules/Comment.module.scss'

const useCommentsRating = (initialComments: ProductCommentsTypes[]) => {
    const [stars, setStars] = useState<React.ReactNode[]>([])
    const [rating, setRating] = useState(0)
    const [commentsLength, setCommentsLength] = useState(0)

    const calculateRatingAndLength = (comments: ProductCommentsTypes[]) => {
        if (comments !== null && comments.length > 0) {
            const totalRate = Number((comments.reduce((accum, curr) => accum + curr.rate, 0) / comments.length).toFixed(1))
            setRating(totalRate)
            setCommentsLength(comments.length)
        } else {
            setRating(0)
            setCommentsLength(0)
        }
    }

    useEffect(() => {
        calculateRatingAndLength(initialComments)
    }, [initialComments])

    useEffect(() => {
        renderStars()
    }, [rating])

    const renderStars = () => {
        const stars = Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index + 1 <= rating ? `${cl.star} ${cl.filled}` : cl.star}>
                ★
            </span>
        ))
        setStars(stars)
    }

    return { rating, commentsLength, stars }
}

export default useCommentsRating

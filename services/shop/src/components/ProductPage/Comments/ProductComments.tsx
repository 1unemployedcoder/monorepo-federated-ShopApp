import React from 'react'
import ProductCreateComments from './ProductCreateComments'
import useCommentsRating from '../../../hooks/useCommentsRating'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import CommentItem from './CommentItem'
import { type ProductCommentsProps } from '@/@types/typesComponents'
import { type ProductCommentsTypes } from '@/@types/types'
import cl from '@/styles/modules/Comment.module.scss'
import {useSelector} from "react-redux";
import type {RootState} from "@/redux/store";

const ProductComments: React.FC<ProductCommentsProps> = ({ comments, productId }) => {
    const { rating, stars } = useCommentsRating(comments as ProductCommentsTypes[])
    const { isAuth } = useSelector((state: RootState) => state.auth)
    return (
        <div>
            {!isNaN(rating) &&
                <span className={cl.rating}>
                Рейтинг: {stars} {rating}
                </span>
            }
            {isAuth && <ProductCreateComments/>}
            <div>
                <TransitionGroup>
                    {(comments.length > 0) && comments.map(comment =>
                        <CSSTransition
                            key={comment.id}
                            timeout={500}
                            classNames={cl.comment}
                        >
                            <CommentItem
                                comment={comment}
                            />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    )
}

export default ProductComments

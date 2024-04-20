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
import {useLocation} from "react-router-dom";

const ProductComments: React.FC<ProductCommentsProps> = ({ comments, refresh }) => {
    const { rating, stars } = useCommentsRating(comments as ProductCommentsTypes[])
    const { isAuth } = useSelector((state: RootState) => state.auth)
    const location = useLocation();
    const pathname = location.pathname;
    const path = pathname.split('/')[2];
    return (
        <div>
            {path !== 'news' && !isNaN(rating) &&
                <span className={cl.rating}>
                Рейтинг: {stars} {rating}
                </span>}
            {isAuth && <ProductCreateComments refresh={refresh}/>}
            <div>
                <TransitionGroup>
                    {(comments.length > 0) && comments.map(comment =>
                        <CSSTransition
                            key={comment.id}
                            timeout={500}
                            classNames={cl.comment}
                        >
                            <CommentItem
                                refresh={refresh}
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

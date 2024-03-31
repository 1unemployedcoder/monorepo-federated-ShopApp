import React from 'react';
import ProductCreateComments from "./ProductCreateComments";
import useCommentsRating from "../../../hooks/useCommentsRating";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import CommentItem from "./CommentItem";
import {ProductCommentsProps} from "../../../@types/typesComponents";
import {ProductCommentsTypes} from "../../../@types/types";

const ProductComments: React.FC<ProductCommentsProps> = ({comments, productId}) => {
    const {rating, stars} = useCommentsRating(comments as ProductCommentsTypes[]);

    return (
        <div>
            {!isNaN(rating) &&
                <span className='rating'>
                Рейтинг: {stars} {rating}
            </span>
            }
            <ProductCreateComments
            />
            <div>
                <TransitionGroup>
                    {comments.length && comments.map(comment =>
                        <CSSTransition
                            key={comment.id}
                            timeout={500}
                            classNames="comment"
                        >
                            <CommentItem
                                comment={comment}
                            />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default ProductComments;
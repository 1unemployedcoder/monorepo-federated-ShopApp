import React from 'react';
import BtnOrdinary from "../../ui/styledComponents/styledButton/BtnOrdinary";
import {CommentItemProps} from "@/@types/typesComponents";
import cl from '@/styles/modules/Comment.module.scss'

const CommentItem: React.FC<CommentItemProps> = ({comment}) => {
    return (
        <div className={cl.commentComponent}>
            <div className={cl.comment__modifier}>
                <div>
                    <div className={cl.comment__body}>
                        <b>{comment.user}</b>:
                    </div>
                    <div className={cl.comment__body}>
                        {comment.description}
                        {"rate" in comment && !!comment.rate &&
                            <div className={cl.comment__rate}>
                                <b>Оценка: {comment.rate}/5</b>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <BtnOrdinary>Удалить</BtnOrdinary>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;

import React from 'react';
import BtnOrdinary from "../../ui/styledComponents/styledButton/BtnOrdinary";
import {CommentItemProps} from "../../../@types/typesComponents";

const CommentItem: React.FC<CommentItemProps> = ({comment}) => {
    return (
        <div className='commentComponent'>
            <div className='comment__modifier'>
                <div>
                    <div className='comment__body'>
                        <b>{comment.name}</b>:
                    </div>
                    <div className='comment__body'>
                        {comment.desc}
                        {"rate" in comment && !!comment.rate &&
                            <div className='comment__rate'>
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
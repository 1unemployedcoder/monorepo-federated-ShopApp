import React from 'react'
import BtnOrdinary from '../../ui/styledComponents/styledButton/BtnOrdinary'
import { type CommentItemProps } from '@/@types/typesComponents'
import cl from '@/styles/modules/Comment.module.scss'
import {useSelector} from "react-redux";
import type {RootState} from "@/redux/store";

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
    const { user, isAuth, status } = useSelector((state: RootState) => state.auth)
    let userName
    if (comment.user === null) {
        userName = 'NoName'
    } else {
        userName = comment.user.name
    }
    return (
        <div className={cl.commentComponent}>
            <div className={cl.comment__modifier}>
                <div>
                    <div className={cl.comment__body}>
                        <b>{userName}</b>:
                    </div>
                    <div className={cl.comment__body}>
                        {comment.description}
                        {'rate' in comment && !!comment.rate &&
                            <div className={cl.comment__rate}>
                                <b>Оценка: {comment.rate}/5</b>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    {userName === user && <BtnOrdinary>Удалить</BtnOrdinary>}
                </div>
            </div>
        </div>
    )
}

export default CommentItem

import React from 'react'
import BtnOrdinary from '../../ui/styledComponents/styledButton/BtnOrdinary'
import { type CommentItemProps } from '@/@types/typesComponents'
import cl from '@/styles/modules/Comment.module.scss'
import { useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'
import { deleteNewsComment, deleteProductComment } from '@/API/createDeleteAPI'
import { useLocation } from 'react-router-dom'

const CommentItem: React.FC<CommentItemProps> = ({ comment, refresh }) => {
    const { user } = useSelector((state: RootState) => state.auth)
    const location = useLocation()
    const pathname = location.pathname
    const path = pathname.split('/')[2]
    const deleteComment = async () => {
        if (path !== 'news') {
            await deleteProductComment(comment.id)
        } else {
            await deleteNewsComment(comment.id)
        }
        await refresh()
    }
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
                        {'rate' in comment && !(comment.rate === 0) &&
                            <div className={cl.comment__rate}>
                                <b>Оценка: {comment.rate}/5</b>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    {userName === user && <BtnOrdinary onClick={deleteComment}>Удалить</BtnOrdinary>}
                </div>
            </div>
        </div>
    )
}

export default CommentItem

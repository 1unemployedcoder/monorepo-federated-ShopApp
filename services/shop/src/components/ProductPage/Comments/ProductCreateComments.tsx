import React, { type FormEvent, useState } from 'react'
import BtnOrdinary from '../../ui/styledComponents/styledButton/BtnOrdinary'
import InputMain from '../../ui/styledComponents/styledInput/InputMain'
import cl from '@/styles/modules/Comment.module.scss'
import { createProductComment } from '@/API/createDeleteAPI'
import { useParams } from 'react-router-dom'
import {useSelector} from "react-redux";
import type {RootState} from "@/redux/store";
const ProductCreateComments = () => {
    const [comment, setComment] = useState({ description: '', rate: 1 })
    const { id } = useParams()
    const submitComment = async (e: FormEvent) => {
        e.preventDefault()
        const response = await createProductComment(Number(id), comment)
        setComment({ description: '', rate: 1 })
    }
    return (
        <form className={cl.formComment}>
            <h3 className={cl.formComment__title}>Создать комментарий</h3>
            <InputMain
                placeholder='Описание'
                value={comment.description}
                onChange={e => { setComment({ ...comment, description: e.target.value }) }}
            />
            <InputMain
                placeholder='Рейтинг'
                value={comment.rate}
                onChange={e => {
                    const rate = parseInt(e.target.value)
                    if (!isNaN(rate) && rate <= 5 && rate >= 1) {
                        setComment({ ...comment, rate })
                    }
                }}
                type="number"
            />
            <BtnOrdinary onClick={submitComment}>Опубликовать</BtnOrdinary>
        </form>
    )
}

export default ProductCreateComments

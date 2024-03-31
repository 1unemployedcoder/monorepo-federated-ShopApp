import React, {FormEvent, useState} from 'react';
import BtnOrdinary from "../../ui/styledComponents/styledButton/BtnOrdinary";
import InputMain from "../../ui/styledComponents/styledInput/InputMain";

const ProductCreateComments = () => {
    const [comment, setComment] = useState({name: '', desc: '', rate: 0});

    const submitComment = (e: FormEvent) => {
        e.preventDefault();
        setComment({name: '', desc: '', rate: 0});
    }
    return (
        <form className='formComment'>
            <h3 className="formComment__title">Создать комментарий</h3>
                <InputMain
                    placeholder='Имя'
                    value={comment.name}
                    onChange={e => setComment({...comment, name: e.target.value})}
                />
                <InputMain
                    placeholder='Описание'
                    value={comment.desc}
                    onChange={e => setComment({...comment, desc: e.target.value})}
                />
                <BtnOrdinary onClick={submitComment}>Опубликовать</BtnOrdinary>
        </form>
    );
};

export default ProductCreateComments;
import React, {useState} from 'react';
import MyModal from "../../ui/modal/MyModal";
import BtnPrimary from "../../ui/styledComponents/styledButton/BtnPrimary";
import BtnOrdinary from "../../ui/styledComponents/styledButton/BtnOrdinary";
import InputMain from "../../ui/styledComponents/styledInput/InputMain";

const LogInModal = () => {
    const [modal, setModal] = useState<boolean>(false)
    return (
        <div>
            <BtnPrimary onClick={() => setModal(true)}>Вход</BtnPrimary>
            <MyModal active={modal} setActive={setModal}>
                <div className='loginModal'>
                    <h3>Авторизация</h3>
                    <InputMain
                        placeholder='Логин'
                    />
                    <InputMain
                        placeholder='Пароль'
                    />
                    <BtnPrimary>Вход</BtnPrimary>
                    <BtnOrdinary>У меня нет аккаунта</BtnOrdinary>
                </div>
            </MyModal>
        </div>
    );
};

export default LogInModal;
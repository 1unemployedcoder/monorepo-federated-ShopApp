import React, {useState} from 'react';
import cl from '@/styles/modules/Chat.module.scss'
import InputMain from "@/components/ui/styledComponents/styledInput/InputMain";
import BtnPrimary from "@/components/ui/styledComponents/styledButton/BtnPrimary";
const Chat = () => {
    const [messages, setMessages] = useState([{isUser: true, msg: 'Здравствуйте'}, {msg: 'Чем могу вам помочь?'},])
    const [open, setOpen] = useState(false)
    const toggleChat = () => {
        setOpen(prevOpen => !prevOpen);
    }
    return (
        <div className={`${cl.chat} ${open ? cl['chat--open'] : cl['chat--closed']}`}>
            {open &&
                <>
                    <p className={cl.close} onClick={toggleChat}>X</p>
                    {!messages.length && <>
                        <h2>Задайте нам вопрос! Мы всегда онлайн</h2>
                        <InputMain placeholder='Ваше имя: '/>
                    </>}
                    <div className={cl.chat__content}>
                        {messages.map(msg =>
                            <div className={msg.isUser ? cl.msg_user : cl.msg_admin}>
                                {msg.msg}
                            </div>
                        )}
                    </div>
                    <InputMain placeholder='Ваш вопрос: '/>
                    <BtnPrimary>Отправить</BtnPrimary>
                </>
            }
            {!open && <p className={cl.open} onClick={toggleChat}><BtnPrimary>Открыть чат</BtnPrimary></p>}
        </div>
    );
};

export default Chat;

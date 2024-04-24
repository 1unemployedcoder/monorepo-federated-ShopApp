import React, { useEffect, useRef, useState } from 'react'
import cl from '@/styles/modules/Chat.module.scss'
import InputMain from '@/components/ui/styledComponents/styledInput/InputMain'
import BtnPrimary from '@/components/ui/styledComponents/styledButton/BtnPrimary'
import { useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'
import { type eventData, type msg } from '@/@types/types'
const Chat = () => {
    const [messages, setMessages] = useState<msg[]>([])
    const [value, setValue] = useState('')
    const { user } = useSelector((state: RootState) => state.auth)
    const [connected, setConnected] = useState(false)
    const [open, setOpen] = useState(false)
    const [userName, setUsername] = useState(user)
    const socket = useRef<WebSocket | null>(null)
    useEffect(() => {
        setUsername(user)
    }, [user])
    const connectChat = () => {
        socket.current = new WebSocket('ws://localhost:5001')
        socket.current.onopen = () => {
            setConnected(true)
            const message = {
                event: 'connection',
                userName,
                role: 'USER',
                id: Date.now()
            }
            socket.current?.send(JSON.stringify(message))
            console.log('Подключение установлено')
        }
        socket.current.onmessage = (event: MessageEvent<eventData>) => {
            const message = JSON.parse(event.data)
            setMessages(messages => [...messages, message])
        }
        socket.current.onclose = () => {
            console.log('Сокет закрыт')
        }
        socket.current.onerror = () => {
            console.log('Сокет ошибка')
        }
    }
    const sendMessage = () => {
        const message = {
            userName,
            message: value,
            id: Date.now(),
            event: 'message',
            role: 'USER'
        }
        socket.current?.send(JSON.stringify(message))
        setValue('')
    }
    return (
        <div className={`${cl.chat} ${open ? cl['chat--open'] : cl['chat--closed']}`}>
            {open &&
                <>
                    <p className={cl.close} onClick={() => { setOpen(false) }}>X</p>
                    {!connected
                        ? <>
                            <h2>Задайте нам вопрос! Мы всегда онлайн</h2>
                            {user === 'User' && <InputMain value={userName} onChange={e => { setUsername(e.target.value) }} placeholder='Ваше имя: '/>}
                            <BtnPrimary onClick={connectChat}>Войти</BtnPrimary>
                        </>
                        : <>
                            <div className={cl.chat__content}>
                                {messages.map(msg =>
                                    <div key={msg.id} className={msg.event === 'connection' || userName !== msg.userName ? cl.msg_user : cl.msg_admin}>
                                        {msg.event === 'connection'
                                            ? <div>Пользователь {msg.userName} подключился к чату</div>
                                            : <div>{userName !== msg.userName ? 'Администратор: ' : 'Вы: '}{msg.message}</div>
                                        }
                                    </div>
                                )}
                            </div>
                            <InputMain value={value} onChange={e => {
                                setValue(e.target.value)
                            }} placeholder='Ваш вопрос: '/>
                            <BtnPrimary onClick={sendMessage}>Отправить</BtnPrimary>
                        </>
                    }
                </>
            }
            {!open && <div className={cl.open} onClick={() => { setOpen(true) }}><BtnPrimary>Открыть чат</BtnPrimary></div>}
        </div>
    )
}

export default Chat

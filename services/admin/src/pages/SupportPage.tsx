import React, { useEffect, useRef, useState } from 'react'
import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    TextField,
    Button,
    Container
} from '@mui/material'
import { useSelector } from 'react-redux'
import { type RootState } from '@/redux/store'
import { type msg } from '@/@types/types'
import type { eventData } from 'shop/src/@types/types'
const SupportPage = () => {
    const [messages, setMessages] = useState<msg[]>([])
    const [value, setValue] = useState('')
    const { user } = useSelector((state: RootState) => state.auth)
    const [connected, setConnected] = useState(false)
    const [userName, setUsername] = useState(user)
    const socket = useRef<WebSocket | null>(null)
    const connectChat = () => {
        socket.current = new WebSocket('ws://localhost:5001')
        socket.current.onopen = () => {
            setConnected(true)
            const message = {
                event: 'connection',
                userName,
                role: 'ADMIN',
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
            role: 'ADMIN'
        }
        socket.current?.send(JSON.stringify(message))
        setValue('')
    }
    useEffect(() => {
        setUsername(user)
        connectChat()
    }, [user])
    return (
        <Container maxWidth="lg">
            <Grid container direction="row" spacing={2} sx={{ margin: '2rem' }}>
                <Grid item xs={3}>
                    <Paper>
                        <Typography variant="h6" align="center" sx={{ mt: 2 }}>Чаты</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper>
                        <List>
                            {connected && messages.map(message => (
                                <ListItem key={message.id}>
                                    <ListItemText
                                        primary={message.userName}
                                        secondary={message.event === 'connection' ? 'Пользователь подключился к чату' : message.message}
                                        primaryTypographyProps={{ fontWeight: 'bold' }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Grid container alignItems="center" sx={{ p: 2 }}>
                            <Grid item xs={10}>
                                <TextField value={value} onChange={(e) => { setValue(e.target.value) }} label="Введите сообщение" fullWidth />
                            </Grid>
                            <Grid item xs={2}>
                                <Button onClick={sendMessage} variant="contained" color="primary" fullWidth>
                                Отправить
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SupportPage

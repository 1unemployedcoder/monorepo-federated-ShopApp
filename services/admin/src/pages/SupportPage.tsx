import React from 'react'
import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    TextField,
    Button,
    ListItemButton,
    Container
} from '@mui/material'

const SupportPage = () => {
    const chats = [
        { id: 1, name: 'Чат 1' },
        { id: 2, name: 'Чат 2' },
        { id: 3, name: 'Чат 3' }
    ]
    const chatContent = [
        { id: 1, sender: 'User', message: 'Привет!' },
        { id: 2, sender: 'Support', message: 'Здравствуйте! Чем могу помочь?' }
    ]
    return (
        <Container maxWidth="lg">
            <Grid container direction="row" spacing={2} sx={{ margin: '2rem' }}>
                <Grid item xs={3}>
                    <Paper>
                        <Typography variant="h6" align="center" sx={{ mt: 2 }}>Чаты</Typography>
                        <List>
                            {chats.map(chat => (
                                <ListItemButton key={chat.id}>
                                    <ListItemText primary={chat.name} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper>
                        <List>
                            {chatContent.map(message => (
                                <ListItem key={message.id}>
                                    <ListItemText
                                        primary={message.sender}
                                        secondary={message.message}
                                        primaryTypographyProps={{ fontWeight: 'bold' }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Grid container alignItems="center" sx={{ p: 2 }}>
                            <Grid item xs={10}>
                                <TextField label="Введите сообщение" fullWidth />
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained" color="primary" fullWidth>
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

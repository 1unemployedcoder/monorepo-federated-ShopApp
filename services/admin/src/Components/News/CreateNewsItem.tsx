import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { createNews } from '@/API/createDeleteAPI'
import { type NewsPost, type Product } from '@packages/shared'
interface CreateProductItemProps {
    refresh: () => Promise<Product | NewsPost>
}
const CreateNewsItem: React.FC<CreateProductItemProps> = ({ refresh }) => {
    const currentDate = new Date()
    const options = { day: 'numeric', month: 'long', year: 'numeric' } as const
    const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(currentDate)
    const createNeww = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        await createNews({
            title: String(data.get('title')),
            description: String(data.get('description')),
            img: String(data.get('img')),
            date: formattedDate
        })
        refresh()
    }
    return (
        <Box onSubmit={createNeww} component="form" sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '10px', width: '15%' }}>
            <Typography variant="h5">
                Создание новости
            </Typography>
            <TextField
                required
                fullWidth
                id="title"
                label="Название"
                name="title"
            />
            <TextField
                required
                fullWidth
                name="description"
                label="Описание"
                id="description"
            />
            <TextField
                required
                fullWidth
                id="img"
                label="url img"
                name="img"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
            >
                Создать новость
            </Button>
            <Button
                type="reset"
                fullWidth
                variant="outlined"
            >
                Очистить форму
            </Button>
        </Box>
    )
}

export default CreateNewsItem

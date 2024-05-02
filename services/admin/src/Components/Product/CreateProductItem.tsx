import React, { useEffect, useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { createProduct } from '@/API/createDeleteAPI'
import { type Category } from '@/@types/types'
import { getCategories } from '@/API/readAPI'
import { type NewsPost, type Product, useFetching } from '@packages/shared'
interface CreateProductItemProps {
    refresh: () => Promise<Product | NewsPost>
}
const CreateProductItem: React.FC<CreateProductItemProps> = ({ refresh }) => {
    const [types, setTypes] = useState<Category[]>()
    const [type, setType] = useState<string>('1')
    const [fetchTypes] = useFetching(async () => {
        const response = await getCategories()
        setTypes(response)
    })
    useEffect(() => {
        void fetchTypes()
    }, [])
    const createProd = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        await createProduct({
            name: String(data.get('name')),
            description: String(data.get('description')),
            img: String(data.get('img')),
            price: Number(data.get('price')),
            typeId: Number(type)
        })
        await refresh()
    }
    return (
        <Box onSubmit={createProd} component="form" sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '10px', width: '15%' }}>
            <Typography variant="h5">
                Создание продукта
            </Typography>
            <TextField
                required
                fullWidth
                id="name"
                label="Имя"
                name="name"
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
            <TextField
                required
                fullWidth
                id="price"
                label="Цена"
                name="price"
            />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                <Select
                    labelId="type"
                    id="type"
                    value={type}
                    label="type"
                    onChange={e => { setType(e.target.value) }}
                >
                    {types?.map(tip =>
                        <MenuItem key={tip.id} value={tip.id}>{tip.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <Button
                type="submit"
                fullWidth
                variant="contained"
            >
                Создать продукт
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

export default CreateProductItem

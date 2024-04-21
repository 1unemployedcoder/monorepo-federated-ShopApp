import {
    Box, Button,
    Card, CardActions,
    CardContent,
    Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFetching } from '@/hooks/useFetching'
import { getAll } from '@/API/readAPI'
import { type Product } from '@/@types/types'
const ProductList = () => {
    const [products, setProducts] = useState<Product[] | null>(null)
    const [fetchData, isLoading, error, setError] = useFetching(async () => {
        const response = await getAll()
        setProducts(response.rows)
    })
    useEffect(() => {
        fetchData()
    }, [])
    if (products === null) {
        return 'Продукты не найдены'
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', margin: '2rem', gap: '1rem', width: '40%' }}>
            {products.map((product, index) => (
                <Card key={index} sx={{ backgroundColor: '#f0f0f0', minWidth: '200px' }}>
                    <CardContent>
                        <img src={product.img} alt={product.name} style={{
                            width: '100px',
                        }}/>
                    </CardContent>
                    <CardContent>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {product.description}
                        </Typography>
                        {` — $${product.price}`}
                    </CardContent>
                    <CardActions>
                        <Button>Открыть</Button>
                        <Button>Удалить</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    )
}

export default ProductList

import {
    Box, Button,
    Card, CardActions,
    CardContent, Pagination, TextField,
    Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFetching } from '@/hooks/useFetching'
import { getAll } from '@/API/readAPI'
import { type Product } from '@/@types/types'
import {getProductType} from "@/@types/typesCRUD";
const ProductList = () => {
    const [productSearch, setProductSearch] = useState<getProductType>({search: '', page: 1});
    const [products, setProducts] = useState<Product[] | null>(null)
    const [totalCount, setTotalCount] = useState<number>(NaN)
    const [fetchData, isLoading, error, setError] = useFetching(async () => {
        const response = await getAll({search: productSearch.search, page: productSearch.page})
        setProducts(response.rows)
        setTotalCount(response.count)
    })
    useEffect(() => {
        void fetchData()
    }, [productSearch])
    if (products === null) {
        return 'Продукты не найдены'
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', margin: '2rem', gap: '1rem', width: '40%' }}>
            <TextField
                id="standard-basic"
                label="Поиск"
                variant="standard"
                value={productSearch.search}
                onChange={(e) => setProductSearch({...productSearch, search: e.target.value})}
            />
            {products.map((product, index) => (
                <Card key={index} sx={{ backgroundColor: '#f0f0f0', minWidth: '200px' }}>
                    <CardContent>
                        <img src={product.img} alt={product.name} style={{
                            width: '100px'
                        }}/>
                    </CardContent>
                    <CardContent>
                        <Typography
                            sx={{ display: 'block' }}
                            component="h1"
                            variant="h5"
                            color="text.primary"
                        >
                            {product.name}
                        </Typography>
                        <Typography
                            sx={{ display: 'inline' }}
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
            <Pagination onChange={(e, page) => setProductSearch({...productSearch, page: page})} count={Math.ceil(totalCount / 2)} />
        </Box>
    )
}

export default ProductList

import { Box, Pagination, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAll } from '@/API/readAPI'
import { type getProductType } from '@/@types/typesCRUD'
import ProductItem from '@/Components/Product/ProductItem'
import CreateProductItem from '@/Components/Product/CreateProductItem'
import { type Product, useFetching } from '@packages/shared'
const ProductList = () => {
    const [productSearch, setProductSearch] = useState<getProductType>({ search: '', page: 1 })
    const [products, setProducts] = useState<Product[] | null>(null)
    const [totalCount, setTotalCount] = useState<number>(NaN)
    const [fetchData] = useFetching(async () => {
        const response = await getAll({ search: productSearch.search, page: productSearch.page })
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
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: '2rem', gap: '1rem', width: '100%', justifyContent: 'center' }}>
            <CreateProductItem refresh={fetchData} />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '1rem', width: '55%' }}>
                <TextField
                    id="standard-basic"
                    label="Поиск"
                    variant="standard"
                    value={productSearch.search}
                    onChange={(e) => { setProductSearch({ ...productSearch, search: e.target.value }) }}
                />
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} refresh={fetchData}/>
                ))}
                <Pagination onChange={(e, page) => { setProductSearch({ ...productSearch, page }) }} count={Math.ceil(totalCount / 2)} />
            </Box>
        </Box>
    )
}

export default ProductList

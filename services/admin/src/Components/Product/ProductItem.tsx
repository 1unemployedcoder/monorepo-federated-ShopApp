import React, { useState } from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from '@mui/material'
import { type ProductCommentsTypes } from '@/@types/types'
import { deleteProduct, deleteProductComment } from '@/API/createDeleteAPI'
import { getProductById } from '@/API/readAPI'
import { type NewsPost, type Product, useFetching } from '@packages/shared'
interface ProductItemProps {
    product: Product
    refresh: () => Promise<NewsPost | Product>
}
const ProductItem: React.FC<ProductItemProps> = ({ product, refresh }) => {
    const [comments, setComments] = useState<ProductCommentsTypes[]>()
    const [modal, setModal] = useState<boolean>(false)
    const [fetchComments] = useFetching(async () => {
        const response = await getProductById(product.id)
        setComments(response.productComments)
    })
    const openModal = () => {
        void fetchComments()
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    const deleteProductItem = async (id: number) => {
        await deleteProduct(id)
        await refresh()
    }
    const deleteComment = async (id: number) => {
        await deleteProductComment(id)
        await fetchComments()
    }
    return (
        <>
            <Card key={product.id} sx={{ backgroundColor: '#f0f0f0', minWidth: '200px' }}>
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
                    <Button onClick={openModal}>Комментарии</Button>
                    <Button onClick={async () => { await deleteProductItem(product.id) }}>Удалить</Button>
                </CardActions>
            </Card>
            <Dialog open={modal} onClose={closeModal}>
                <DialogTitle>Комментарии</DialogTitle>
                <DialogContent>
                    {comments?.map(comm =>
                        <>
                            <DialogContentText>
                                Автор: {comm.user === null ? 'User' : comm.user.name}
                            </DialogContentText>
                            <DialogContentText>
                                Описание: {comm.description}
                            </DialogContentText>
                            <DialogContentText>
                                Рейтинг: {comm.rate} / 5
                            </DialogContentText>
                            <Button onClick={async () => { await deleteComment(comm.id) }}>Удалить</Button>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal}>Закрыть</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ProductItem

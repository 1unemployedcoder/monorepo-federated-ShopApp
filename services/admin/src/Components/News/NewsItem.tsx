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
import type { NewsCommentsTypes, NewsPost, Product } from '@/@types/types'
import { deleteCommentNews, deleteNews } from '@/API/createDeleteAPI'
import { useFetching } from '@/hooks/useFetching'
import { getNewsById } from '@/API/readAPI'
interface NewsItemProps {
    neww: NewsPost
    refresh: () => Promise<NewsPost | Product>
}
const NewsItem: React.FC<NewsItemProps> = ({ neww, refresh }) => {
    const [comments, setComments] = useState<NewsCommentsTypes[]>()
    const [modal, setModal] = useState<boolean>(false)
    const [fetchComments] = useFetching(async () => {
        const response = await getNewsById(neww.id)
        setComments(response.newsComments)
    })
    const openModal = () => {
        void fetchComments()
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    const deleteComment = async (id: number) => {
        await deleteCommentNews(id)
        await fetchComments()
    }
    const deleteNeww = async () => {
        await deleteNews(neww.id)
        await refresh()
    }
    return (
        <>
            <Card sx={{ backgroundColor: '#f0f0f0', minWidth: '200px' }}>
                <CardContent>
                    <img src={neww.img} alt={neww.title} style={{
                        width: '100px'
                    }}/>
                </CardContent>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {neww.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {neww.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Дата: {neww.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Автор: {neww.user.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={openModal}>Комментарии</Button>
                    <Button onClick={deleteNeww}>Удалить</Button>
                </CardActions>
            </Card>
            <Dialog open={modal} onClose={closeModal}>
                <DialogTitle>Комментарии</DialogTitle>
                <DialogContent>
                    {comments !== undefined && comments.map(comm =>
                        <>
                            <DialogContentText>
                                Автор: {comm.user === null ? 'User' : comm.user.name}
                            </DialogContentText>
                            <DialogContentText>
                                Описание: {comm.description}
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

export default NewsItem

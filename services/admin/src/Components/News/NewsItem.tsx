import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import type {NewsPost, Product} from "@/@types/types";
import {deleteNews} from "@/API/createDeleteAPI";
interface NewsItemProps {
    neww: NewsPost
    refresh: () => Promise<NewsPost | Product>
}
const NewsItem: React.FC<NewsItemProps> = ({neww, refresh}) => {
    const deleteNeww = async () => {
        await deleteNews(neww.id)
        await refresh()
    }
    return (
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
                <Button>Открыть</Button>
                <Button onClick={deleteNeww}>Удалить</Button>
            </CardActions>
        </Card>
    );
};

export default NewsItem;

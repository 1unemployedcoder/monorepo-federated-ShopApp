import {
    Box, Button,
    Card, CardActions,
    CardContent,
    Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFetching } from '@/hooks/useFetching'
import { getNews } from '@/API/readAPI'
import { type NewsPost } from '@/@types/types'
const NewsList = () => {
    const [news, setNews] = useState<NewsPost[] | null>(null)
    const [fetchData] = useFetching(async () => {
        const response = await getNews()
        setNews(response)
    })
    useEffect(() => {
        void fetchData()
    }, [])
    if (news === null) {
        return 'Новости не найдены'
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', margin: '2rem', gap: '1rem', width: '40%' }}>
            {news.map((neww, index) => (
                <Card key={neww.id} sx={{ backgroundColor: '#f0f0f0', minWidth: '200px' }}>
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
                        <Button>Удалить</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    )
}

export default NewsList

import {
    Box
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFetching } from '@/hooks/useFetching'
import { getNews } from '@/API/readAPI'
import { type NewsPost } from '@/@types/types'
import NewsItem from "@/Components/News/NewsItem";
import CreateNewsItem from "@/Components/News/CreateNewsItem";
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
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: '2rem', gap: '1rem', width: '100%', justifyContent: 'center' }}>
            <CreateNewsItem refresh={fetchData} />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '1rem', width: '55%' }}>
            {news.map((neww) => (
                <NewsItem key={neww.id} neww={neww} refresh={fetchData} />
            ))}
            </Box>
        </Box>
    )
}

export default NewsList

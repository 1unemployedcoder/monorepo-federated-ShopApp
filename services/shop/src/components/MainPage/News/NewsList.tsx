import React, { useEffect, useState } from 'react'
import { useFetching } from '@/hooks/useFetching'
import { getNews } from '@/API/ProductService'
import NewsItem from './NewsItem'
import ConditionalContent from '../../ConditionalContent'
import NewsSkeleton from './NewsSkeleton'
import { type NewsPost } from '@/@types/types'

const NewsList = () => {
    const [news, setNews] = useState<NewsPost[]>([])
    const [newsFetching, isLoading, error, setError] = useFetching(async () => {
        const response = await getNews()
        // @ts-ignore
        setNews(response)
    })

    useEffect(() => {
        newsFetching()
    }, [error])
    return (
        <>
            <ConditionalContent
                isLoading={isLoading}
                error={error}
                refresh={setError}
                data={news.length}
                SkeletonComponent={NewsSkeleton}
                search={null}>
                {news.map(neww =>
                    <NewsItem
                        key={neww.id}
                        author={neww.user}
                        date={neww.date}
                        desc={neww.description}
                        img={neww.img}
                        title={neww.title}
                        id={neww.id}
                        comms={1}
                        isOpen={false}
                    />
                )}
            </ConditionalContent>
        </>
    )
}

export default NewsList

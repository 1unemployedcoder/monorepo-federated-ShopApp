import React, { useEffect, useState } from 'react'
import { useFetching } from '@/hooks/useFetching'
import ProductService from '../../../API/ProductService'
import NewsItem from './NewsItem'
import ConditionalContent from '../../ConditionalContent'
import NewsSkeleton from './NewsSkeleton'
import { type NewsPost } from '@/@types/types'

const NewsList = () => {
    const [news, setNews] = useState<NewsPost[]>([])
    const [newsFetching, isLoading, error, setError] = useFetching(async () => {
        const response = await ProductService.getNews()
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
                        author={neww.author}
                        date={neww.date}
                        desc={neww.desc}
                        img={neww.img}
                        title={neww.title}
                        id={neww.id}
                        comms={neww.commentsIds.length}
                        isOpen={false}
                    />
                )}
            </ConditionalContent>
        </>
    )
}

export default NewsList

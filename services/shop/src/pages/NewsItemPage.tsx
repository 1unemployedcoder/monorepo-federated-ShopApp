import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '@/hooks/useFetching'
import ProductComments from '../components/ProductPage/Comments/ProductComments'
import NewsItem from '../components/MainPage/News/NewsItem'
import ConditionalContent from '../components/ConditionalContent'
import PageSkeleton from '../components/ui/skeletonLoader/PageSkeleton'
import { type gettedNewsById } from '@/@types/types'
import { Helmet } from 'react-helmet'
import cl from '@/styles/modules/News.module.scss'
import { getNewsById } from '@/API/ProductService'

const NewsItemPage = () => {
    const { id } = useParams() // id новости
    const [newsPost, setNewsPost] = useState<gettedNewsById | null>(null)
    const [fetchingNews, isLoading, error, setError] = useFetching(async () => {
        const data = await getNewsById(Number(id))
        setNewsPost(data)
    })
    useEffect(() => {
        void fetchingNews()
    }, [error])
    return (
        <div className={cl.newsPage}>
            {newsPost !== null && <><Helmet>
                <title>
                    {`SHOP | ${newsPost.title ?? 'Новость'}`}
                </title>
            </Helmet><ConditionalContent
                isLoading={isLoading}
                refresh={setError}
                error={error}
                data={newsPost.title.length}
                SkeletonComponent={PageSkeleton}
                search={null}
            >
                <NewsItem
                    id={newsPost.id}
                    img={newsPost.img}
                    title={newsPost.title}
                    desc={newsPost.description}
                    author={newsPost.user.name}
                    date={newsPost.date}
                    isOpen={true}
                />
                <ProductComments comments={newsPost.newsComments} refresh={fetchingNews}/>
            </ConditionalContent></>
            }
        </div>
    )
}

export default NewsItemPage

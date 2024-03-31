import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import ProductService from "../API/ProductService";
import ProductComments from "../components/ProductPage/Comments/ProductComments";
import NewsItem from "../components/MainPage/News/NewsItem";
import ConditionalContent from "../components/ConditionalContent";
import PageSkeleton from "../components/ui/skeletonLoader/PageSkeleton";
import {NewsCommentsTypes, NewsPost} from "../@types/types";
import {Helmet} from "react-helmet";

const NewsItemPage = () => {
    const {id} = useParams() //id новости
    const [newsPost, setNewsPost] = useState<NewsPost>({
        author: "",
        commentsIds: [],
        date: "",
        desc: "",
        id: 0,
        img: "",
        title: ""
    })
    const [comments, setComments] = useState<NewsCommentsTypes[]>([])
    const [fetchingNews, isLoading, error, setError] = useFetching(async () => {
        const data = await ProductService.getNewsById(Number(id))
        setNewsPost(data.news)
        setComments(data.comments)
    })

    useEffect(() => {
        fetchingNews()
    }, [error]);
    return (
        <div className='newsPage'>
            <Helmet>
                <title>
                    {`SHOP | ${newsPost.title ?? 'Новость'}`}
                </title>
            </Helmet>
            <ConditionalContent
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
                desc={newsPost.desc}
                author={newsPost.author}
                date={newsPost.date}
                isOpen={true}
                comms={NaN}
            />
            <ProductComments comments={comments} productId={newsPost.id}/>
            </ConditionalContent>
        </div>
    );
};

export default NewsItemPage;
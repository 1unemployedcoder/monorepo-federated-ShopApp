import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import ProductService from "../API/ProductService";
import ProductComments from "../components/ProductPage/Comments/ProductComments";
import AboutProductItem from "../components/ProductPage/AboutProductItem";
import PageSkeleton from "../components/ui/skeletonLoader/PageSkeleton";
import ConditionalContent from "../components/ConditionalContent";
import {MergeProductComments, ProductCommentsTypes} from "../@types/types";
import {Helmet} from "react-helmet";

const ProductPage = () => {
    const [product, setProduct] = useState<MergeProductComments>({
        comments: [],
        category: {value: '', name: ''},
        commentIds: [],
        desc: "",
        gadget: "",
        id: 0,
        img: "",
        price: 0
    })
    const [comments, setComments] = useState<ProductCommentsTypes[]>([])
    const {id} = useParams()
    const [fetchingPosts, isLoading, error, setError] = useFetching(async () => {
        const data = await ProductService.getProductById(Number(id))
        setProduct(data.product)
        if (!data.comments.length) {
            setComments([])
        }
        setComments(data.comments)
    })

    useEffect(() => {
        fetchingPosts()
    }, [error]);

    return (
        <div className='productComponent'>
            <Helmet>
                <title>
                    {`SHOP | ${product.gadget ?? 'Купить...'}`}
                </title>
            </Helmet>
            <ConditionalContent
                isLoading={isLoading}
                refresh={setError}
                error={error}
                data={product.gadget.length}
                SkeletonComponent={PageSkeleton}
                search={null}
            >
                <strong className='productTitle'>{product.gadget}</strong>
                <AboutProductItem product={product}/>
                <ProductComments comments={comments} productId={product.id}/>
            </ConditionalContent>
        </div>
    );
};

export default ProductPage;
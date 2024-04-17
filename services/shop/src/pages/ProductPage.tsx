import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '@/hooks/useFetching'
import ProductComments from '../components/ProductPage/Comments/ProductComments'
import AboutProductItem from '../components/ProductPage/AboutProductItem'
import PageSkeleton from '../components/ui/skeletonLoader/PageSkeleton'
import ConditionalContent from '../components/ConditionalContent'
import { type MergeProductComments } from '@/@types/types'
import { Helmet } from 'react-helmet'
import cl from '@/styles/modules/ProductPage.module.scss'
import { getProductById } from '@/API/ProductService'

const ProductPage = () => {
    const [product, setProduct] = useState<MergeProductComments>({
        comments: [],
        categoryId: 0,
        userId: 0,
        commentIds: [],
        desc: '',
        name: '',
        id: 0,
        img: '',
        price: 0
    })
    const { id } = useParams()
    const [fetchingPosts, isLoading, error, setError] = useFetching(async () => {
        const data = await getProductById(Number(id))
        // @ts-ignore
        setProduct(data)
    })

    useEffect(() => {
        fetchingPosts()
    }, [error])

    return (
        <div className={cl.productComponent}>
            <Helmet>
                <title>
                    {`SHOP | ${product.name ?? 'Купить...'}`}
                </title>
            </Helmet>
            <ConditionalContent
                isLoading={isLoading}
                refresh={setError}
                error={error}
                data={product.name.length}
                SkeletonComponent={PageSkeleton}
                search={null}
            >
                <strong className={cl.productTitle}>{product.name}</strong>
                <AboutProductItem product={product}/>
                <ProductComments comments={[]} productId={product.id}/>
            </ConditionalContent>
        </div>
    )
}

export default ProductPage

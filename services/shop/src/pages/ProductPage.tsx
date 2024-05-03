import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '@/hooks/useFetching'
import ProductComments from '../components/ProductPage/Comments/ProductComments'
import AboutProductItem from '../components/ProductPage/AboutProductItem'
import PageSkeleton from '../components/ui/skeletonLoader/PageSkeleton'
import ConditionalContent from '../components/ConditionalContent'
import { type gettedProductById } from '@/@types/types'
import { Helmet } from 'react-helmet'
import cl from '@/styles/modules/ProductPage.module.scss'
import { getProductById } from '@/API/ProductService'

const ProductPage = () => {
    const [product, setProduct] = useState<gettedProductById>({
        productComments: [],
        categoryId: 0,
        description: '',
        name: '',
        id: 0,
        img: '',
        price: 0
    })
    const { id } = useParams()
    const [fetchingPosts, isLoading, error, setError] = useFetching(async () => {
        const data = await getProductById(Number(id))
        setProduct(data)
    })

    useEffect(() => {
        void fetchingPosts()
    }, [error])
    return (
        <div data-testid='productPageLink' className={cl.productComponent}>
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
                <ProductComments refresh={fetchingPosts} comments={product.productComments}/>
            </ConditionalContent>
        </div>
    )
}

export default ProductPage

import React, { useEffect, useState } from 'react'
import { totalPagesCalc } from '@/utils/totalPagesCalc'
import ProductFilter from '../components/ProductsPage/Product/ProductFilter'
import { useLocation } from 'react-router-dom'
import ProductsContent from '../components/ProductsPage/PageStates/ProductsContent'
import ProductSkeleton from '../components/ProductsPage/Product/ProductSkeleton'
import ConditionalContent from '../components/ConditionalContent'
import { useSelector } from 'react-redux'
import { fetchProducts } from '@/redux/slices/productsSlice'
import { type SortType } from '@/@types/types'
import { type RootState, useAppDispatch } from '@/redux/store'
import { setCategory } from '@/redux/slices/categoriesSlice'
import { Helmet } from 'react-helmet'
import cl from '@/styles/modules/Products.module.scss'

function Products () {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const search = searchParams.get('search') ?? ''
    const currentTypeID = searchParams.get('type') || ''
    const currentCategoryName = localStorage.getItem('currentCategoryName')
    const [sort, setSort] = useState<SortType>('')
    const [totalPages, setTotalPages] = useState<number>(0)
    const [limit] = useState<number>(5)
    const [page, setPage] = useState<number>(1)

    const dispatch = useAppDispatch()
    const { items, count, status } = useSelector((state: RootState) => state.products)

    useEffect(() => {
        dispatch(setCategory({
            name: currentCategoryName,
            id: currentTypeID
        }))
    }, [dispatch])

    useEffect(() => {
        void dispatch(fetchProducts({ search, sort, limit, page, typeId: currentTypeID }))
    }, [sort, page, search])

    useEffect(() => {
        setPage(1)
    }, [sort, search])

    useEffect(() => {
        setTotalPages(totalPagesCalc(count, limit))
    }, [items])

    return (
        <div className={cl.Products}>
            <Helmet>
                <title>
                    {`SHOP | ${currentCategoryName ?? 'Купить...'}`}
                </title>
            </Helmet>
            {(search !== '') && (items.length > 0)
                ? <div>
                    <h1 className={cl.title}>{currentCategoryName}</h1>
                    <div className={cl.title}>Результаты поиска по: {search}</div>
                </div>
                : <h1 className={cl.title}>{currentCategoryName}</h1>
            }
            <ProductFilter
                sort={sort}
                setSort={setSort}
            />
            <ConditionalContent
                data={items.length}
                error={status === 'error' ? '404' : ''}
                isLoading={status === 'loading'}
                SkeletonComponent={ProductSkeleton}
                search={search}
                refresh={null}
            >
                <ProductsContent
                    products={items}
                    totalPages={totalPages}
                    setPage={setPage}
                    page={page}
                />
            </ConditionalContent>
        </div>
    )
}

export default Products

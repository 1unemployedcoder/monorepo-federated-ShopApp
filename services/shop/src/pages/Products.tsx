import React, {useEffect, useState} from "react";
import {totalPagesCalc} from "../utils/totalPagesCalc";
import ProductFilter from "../components/ProductsPage/Product/ProductFilter";
import {useLocation, useParams} from "react-router-dom";
import ProductsContent from "../components/ProductsPage/PageStates/ProductsContent";
import ProductSkeleton from "../components/ProductsPage/Product/ProductSkeleton";
import ConditionalContent from "../components/ConditionalContent";
import {useSelector} from "react-redux";
import {fetchProducts} from "../redux/slices/productsSlice";
import {MyHeaders, SortType} from "../@types/types";
import {RootState, useAppDispatch} from "../redux/store";
import {setCategory} from "../redux/slices/categoriesSlice";
import {Helmet} from "react-helmet";

function Products() {
    const {type } = useParams()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('search');
    const currentCategoryName = localStorage.getItem('currentCategoryName')
    const [sort, setSort] = useState<SortType>('')
    const [totalPages, setTotalPages] = useState<number>(0)
    const [limit, setLimit] = useState<number>(5)
    const [page, setPage] = useState<number>(1)

    const dispatch = useAppDispatch()
    const {items, headers, status} = useSelector((state: RootState) => state.products)

    useEffect(() => {
        dispatch(setCategory({
            value: {
                value: type
            },
            name: currentCategoryName
        }));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProducts({ search, sort, limit, page, type }))
    }, [sort, page, search])

    useEffect(() => {
        setPage(1)
    }, [sort, search]);

    useEffect(() => {
        const totalCount = headers as unknown as MyHeaders
        if ('x-total-count' in totalCount) {
            setTotalPages(totalPagesCalc(parseInt(totalCount['x-total-count']), limit));
        }
    }, [items]);

    return (
        <div className="Products">
            <Helmet>
                <title>
                    {`SHOP | ${currentCategoryName ?? 'Купить...'}`}
                </title>
            </Helmet>
            {search && items.length
                ? <div>
                    <h1 className='title'>{currentCategoryName}</h1>
                    <div className='title'>Результаты поиска по: {search}</div>
                </div>
                : <h1 className='title'>{currentCategoryName}</h1>
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
    );
}

export default Products;

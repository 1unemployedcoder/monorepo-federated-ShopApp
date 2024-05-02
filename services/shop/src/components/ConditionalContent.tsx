import React from 'react'
import ErrorRefresh from './ProductsPage/PageStates/ErrorRefresh'
import SkeletonLoader from './ui/skeletonLoader/SkeletonLoader'
import UndefinedProducts from './ProductsPage/PageStates/UndefinedProducts'
import { type ConditionalContentProps } from '@/@types/typesComponents'

const ConditionalContent: React.FC<ConditionalContentProps> = ({ data, isLoading, error, refresh, children, SkeletonComponent, search }) => {
    if (isLoading) {
        return (
            <SkeletonLoader>
                <SkeletonComponent/>
            </SkeletonLoader>
        )
    } else if (error !== '') {
        return <ErrorRefresh error={error} refreshPage={refresh}/>
    } else if (data !== 0) {
        return children
    } else {
        return <UndefinedProducts search={search}/>
    }
}

export default ConditionalContent

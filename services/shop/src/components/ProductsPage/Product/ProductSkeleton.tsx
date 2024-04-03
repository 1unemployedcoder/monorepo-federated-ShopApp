import React from "react"
import ContentLoader from "react-content-loader"
import cl from '@/styles/modules/ProductItem.module.scss'
const ProductSkeleton: React.FC = (props) => (
    <ContentLoader
        className={cl.post}
        speed={1}
        width={921}
        height={202}
        viewBox="0 0 921 202"
        backgroundColor="#ffffff"
        foregroundColor="#ffe8b8"
        {...props}
    >
        <rect x="44" y="56" rx="9" ry="9" width="154" height="88"/>
        <rect x="210" y="80" rx="0" ry="0" width="72" height="17"/>
        <rect x="210" y="110" rx="0" ry="0" width="250" height="17"/>
        <rect x="780" y="38" rx="9" ry="9" width="109" height="49"/>
        <rect x="780" y="108" rx="9" ry="9" width="109" height="49"/>
    </ContentLoader>
)

export default ProductSkeleton

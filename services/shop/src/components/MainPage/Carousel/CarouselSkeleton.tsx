import React from "react"
import ContentLoader from "react-content-loader"
import cat from '@/styles/modules/Categories.module.scss'
const CarouselSkeleton: React.FC = (props) => (
    <div className={cat.categories}>
        <ContentLoader
            speed={0.5}
            width={350}
            height={70}
            viewBox="0 0 350 70"
            backgroundColor="#e7e7e7"
            foregroundColor="#ffe8b8"
            {...props}
        >
            <rect x="0" y="0" rx="9" ry="9" width="350" height="70" />
        </ContentLoader>
    </div>
)

export default CarouselSkeleton

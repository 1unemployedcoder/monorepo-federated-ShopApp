import React from "react"
import ContentLoader from "react-content-loader"
import cat from '@/styles/modules/Categories.module.scss'
import news from '@/styles/modules/News.module.scss'
const NewsSkeleton: React.FC = (props) => (
    <div className={cat.categories}>
        <ContentLoader
            className={news.news}
            speed={1}
            width={602}
            height={250}
            viewBox="0 0 602 250"
            backgroundColor="#e7e7e7"
            foregroundColor="#ffe8b8"
            {...props}
        >
            <rect x="0" y="0" rx="9" ry="9" width="602" height="250" />
        </ContentLoader>
    </div>
)

export default NewsSkeleton

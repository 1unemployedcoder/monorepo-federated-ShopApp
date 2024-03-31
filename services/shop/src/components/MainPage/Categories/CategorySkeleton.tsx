import React from "react"
import ContentLoader from "react-content-loader"

const CategorySkeleton: React.FC = (props) => (
    <div className='categories'>
        <ContentLoader
            speed={0.5}
            width={156}
            height={38}
            viewBox="0 0 156 38"
            backgroundColor="#e7e7e7"
            foregroundColor="#ffe8b8"
            {...props}
        >
            <rect x="0" y="0" rx="9" ry="9" width="156" height="38" />
        </ContentLoader>
    </div>
)

export default CategorySkeleton
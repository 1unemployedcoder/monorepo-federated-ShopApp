import React from "react"
import ContentLoader from "react-content-loader"

const PageSkeleton: React.FC = (props) => (
    <div className='categories'>
        <ContentLoader
            className='news'
            speed={0.5}
            width={1200}
            height={200}
            viewBox="0 0 1200 200"
            backgroundColor="#e7e7e7"
            foregroundColor="#ffe8b8"
            {...props}
        >
            <rect x="0" y="30" rx="9" ry="9" width="1200" height="400" />
            <rect x="0" y="50" rx="9" ry="9" width="1200" height="400" />
        </ContentLoader>
    </div>
)

export default PageSkeleton
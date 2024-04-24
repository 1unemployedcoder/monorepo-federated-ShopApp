import React from 'react'
import { type SkeletonLoaderProps } from '@/@types/typesComponents'

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ children }) => {
    return (
        <div>
            {Array.from({ length: 2 }, (_, i) =>
                <div key={i}>
                    {children}
                </div>
            )}
        </div>
    )
}

export default SkeletonLoader

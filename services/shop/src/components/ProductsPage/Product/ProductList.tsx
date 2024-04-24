import React from 'react'
import ProductItem from './ProductItem'
import { ToastContainer } from 'react-toastify'
import { type ProductArrayProps } from '@/@types/typesComponents'

const ProductList: React.FC<ProductArrayProps> = ({ products }) => {
    return (
        <div>
            <ToastContainer position="top-center" autoClose={2000}/>
            {products.map(product =>
                <ProductItem
                    key={product.id}
                    product={product}
                />
            )
            }
        </div>
    )
}

export default ProductList

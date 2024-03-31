import React from 'react';
import ProductList from "../Product/ProductList";
import Pagination from "../Pagination";
import {ProductsContentProps} from "../../../@types/typesComponents";

const ProductsContent: React.FC<ProductsContentProps> = ({products, totalPages, setPage, page}) => {
    return (
        <div>
            <ProductList
                products={products}
            />
            <Pagination
                totalPages={totalPages}
                setPage={setPage}
                currentPage={page}
            />
        </div>
    );
};

export default ProductsContent;
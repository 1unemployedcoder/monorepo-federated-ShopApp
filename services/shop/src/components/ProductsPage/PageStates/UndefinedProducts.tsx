import React from 'react';
import {UndefinedProductsProps} from "../../../@types/typesComponents";

const UndefinedProducts: React.FC<UndefinedProductsProps> = ({search}) => {

    if (search) {
            return <div className='title'>По запросу "{search}" ничего не найдено</div>
    } else {
        return <div className='title'>Тут ничего нет</div>
    }
};

export default UndefinedProducts;
import React from 'react';
import MySelect from "../../ui/select/MySelect";
import {ProductFilterProps} from "../../../@types/typesComponents";

const ProductFilter: React.FC<ProductFilterProps> = ({sort, setSort}) => {

    return (
            <MySelect
                value={sort}
                defaultName='По релевантности'
                defaultValue=''
                onChange={sort => setSort(sort)}
                options={[
                    {name: 'Сначала недорогие', value: 'asc'},
                    {name: 'Сначала дорогие', value: 'desc'},
                ]}
            />
    );
};

export default ProductFilter;
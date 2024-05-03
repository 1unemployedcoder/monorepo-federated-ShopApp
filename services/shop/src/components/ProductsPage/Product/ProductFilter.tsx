import MySelect from '@/components/ui/select/MySelect'
import { type ProductFilterProps } from '@/@types/typesComponents'
import React from 'react'

const ProductFilter: React.FC<ProductFilterProps> = ({ sort, setSort }) => {
    return (
        <MySelect
            value={sort}
            defaultName='По релевантности'
            defaultValue=''
            onChange={sort => { setSort(sort) }}
            options={[
                { name: 'Сначала недорогие', value: 'price_asc' },
                { name: 'Сначала дорогие', value: 'price_desc' }
            ]}
        />
    )
}

export default ProductFilter

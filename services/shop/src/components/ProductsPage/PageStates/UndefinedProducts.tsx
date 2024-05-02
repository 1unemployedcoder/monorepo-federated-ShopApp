import React from 'react'
import { type UndefinedProductsProps } from '@/@types/typesComponents'
import title from '@/styles/modules/ErrorRefresh.module.scss'
const UndefinedProducts: React.FC<UndefinedProductsProps> = ({ search }) => {
    if (search != null) {
        return <div className={title.title}>По запросу &quot;{search}&quot; ничего не найдено</div>
    } else {
        return <div className={title.title}>Тут ничего нет</div>
    }
}

export default UndefinedProducts

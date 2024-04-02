import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setCategory, setCategories } from '@/redux/slices/categoriesSlice'
import BtnPrimary from '../../ui/styledComponents/styledButton/BtnPrimary'
import { type CategoriesProps } from '@/@types/typesComponents'
import { useAppDispatch } from '@/redux/store'
import cl from '@/styles/modules/Categories.module.scss'

const CategoriesList: React.FC<CategoriesProps> = ({ categories }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setCategories(categories))
    }, [categories])

    const newCategory = (type: string, name: string) => {
        dispatch(setCategory({
            value: {
                value: type
            },
            name
        }))
        localStorage.setItem('currentCategoryName', name)
        navigate(`/shop/products/${type}/`)
    }

    return (
        <div className={cl.categories}>
            {categories.map(category =>
                <BtnPrimary key={category.value}
                    onClick={() => { newCategory(category.value, category.name) }}>{category.name}</BtnPrimary>
            )}
        </div>
    )
}

export default CategoriesList

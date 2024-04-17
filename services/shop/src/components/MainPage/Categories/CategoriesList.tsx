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

    const newCategory = (name: string, id: number) => {
        dispatch(setCategory({
            name,
            id
        }))
        localStorage.setItem('currentCategoryName', name)
        navigate(`/shop/products/?type=${id}`)
    }

    return (
        <div className={cl.categories}>
            {categories.map(category =>
                <BtnPrimary key={category.name}
                    onClick={() => { newCategory(category.name, category.id) }}>{category.name}</BtnPrimary>
            )}
        </div>
    )
}

export default CategoriesList

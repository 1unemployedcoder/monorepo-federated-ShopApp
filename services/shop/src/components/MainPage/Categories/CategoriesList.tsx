import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {setCategory, setCategories} from "../../../redux/slices/categoriesSlice";
import BtnPrimary from "../../ui/styledComponents/styledButton/BtnPrimary";
import {CategoriesProps} from "../../../@types/typesComponents";
import {useAppDispatch} from "../../../redux/store";

const CategoriesList: React.FC<CategoriesProps> = ({categories}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setCategories(categories))
    }, [categories]);

    const newCategory = (type: string, name: string) => {
        dispatch(setCategory({
            value: {
                value: type
            },
            name: name
        }))
        localStorage.setItem('currentCategoryName', name)
        navigate(`/shop/products/${type}/`)
    }

    return (
        <div className='categories'>
            {categories.map(category =>
                <BtnPrimary key={category.value}
                     onClick={() => newCategory(category.value, category.name)}>{category.name}</BtnPrimary>
            )}
        </div>
    );
};

export default CategoriesList;

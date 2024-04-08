import React, {useState} from 'react';
import InputMain from "../../ui/styledComponents/styledInput/InputMain";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {useNavigate} from "react-router-dom";
import BtnOrdinary from "../../ui/styledComponents/styledButton/BtnOrdinary";

const SearchNav = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState<string>('')
    const currentCategoryName = useSelector((state: RootState) => state.categories.name);
    const currentCategory = useSelector((state: RootState) => state.categories.value.value);
    const goingSearch = () => {
        if (search.trim() !== '') {
            const categoryParam = currentCategory || 'all'
            navigate(`/shop/products/${categoryParam}?search=${search}`)
            setSearch('')
        }
    }
    return (
        <>
            <InputMain
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={`Поиск по ${currentCategoryName}`}
            />
            <BtnOrdinary onClick={goingSearch}>&#128269;</BtnOrdinary>
        </>
    );
};

export default SearchNav;

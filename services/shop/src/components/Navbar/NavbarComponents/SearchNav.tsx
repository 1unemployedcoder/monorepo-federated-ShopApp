import React, { useState } from 'react'
import InputMain from '../../ui/styledComponents/styledInput/InputMain'
import { useSelector } from 'react-redux'
import { type RootState } from '@/redux/store'
import { useNavigate } from 'react-router-dom'
import BtnOrdinary from '../../ui/styledComponents/styledButton/BtnOrdinary'

const SearchNav = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState<string>('')
    const currentCategoryName = useSelector((state: RootState) => state.categories.name)
    const currentCategory = (useSelector((state: RootState) => state.categories.id) !== '') || ''
    const goingSearch = () => {
        if (search.trim() !== '') {
            navigate(`/shop/products/?type=${currentCategory}&search=${search}`)
            setSearch('')
        }
    }
    const handleKeyDown = (e: any) => {
        if (e.code === 'Enter') {
            goingSearch()
        }
    }
    return (
        <>
            <InputMain
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                placeholder={`Поиск по ${currentCategoryName}`}
                onKeyDown={handleKeyDown}
            />
            <BtnOrdinary onClick={goingSearch}>&#128269;</BtnOrdinary>
        </>
    )
}

export default SearchNav

import React, { useEffect } from 'react'
import { setCategory } from '@/redux/slices/categoriesSlice'
import CartList from '../components/CartPage/Cart/CartList'
import { useAppDispatch } from '@/redux/store'
import { Helmet } from 'react-helmet'

const Cart = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setCategory({
            id: '',
            name: 'Все'
        }))
    }, [dispatch])
    return (
        <div data-testid='cartLink'>
            <Helmet>
                <title>
                    SHOP | Корзина
                </title>
            </Helmet>
            <CartList/>
        </div>
    )
}

export default Cart

import React, {useEffect} from 'react';
import {setCategory} from "../redux/slices/categoriesSlice";
import CartList from "../components/CartPage/Cart/CartList";
import {useAppDispatch} from "../redux/store";
import {Helmet} from "react-helmet";

const Cart = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setCategory({
            value: {
                value: 'all'
            },
            name: 'Все'
        }));
    }, [dispatch]);
    return (
        <div>
            <Helmet>
                <title>
                    SHOP | Корзина
                </title>
            </Helmet>
            <CartList/>
        </div>
    );
};

export default Cart;
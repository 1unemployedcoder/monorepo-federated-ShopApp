import React from 'react';
import {useSelector} from "react-redux";
import {useTotalProducts} from "../../../hooks/useCalcProducts";
import {useNavigate} from "react-router-dom";
import BtnOrdinary from "../../ui/styledComponents/styledButton/BtnOrdinary";
import {cartSelector} from "../../../redux/slices/cartSlice";
import {CartProduct} from "../../../@types/types";

const CartButton = () => {
    const cartState = useSelector(cartSelector)
    const cart = Object.values(cartState)
    const {totalCount, totalPrice} = useTotalProducts(cart as CartProduct[])
    const navigate = useNavigate()
    return (
        <div>
            <BtnOrdinary onClick={() => navigate('/shop/cart/')}>
                {totalCount
                    ? <div className='gold'>
                        {totalPrice}$
                    </div>
                    : <>Корзина</>
                }
            </BtnOrdinary>
            {totalCount
                ? <div>
                        <span className='cartCount'>
                            {totalCount}
                        </span>
                </div>
                : <></>
            }
        </div>
    );
};

export default CartButton;

import React from 'react';
import CartItem from "./CartItem";
import {useTotalProducts} from "../../../hooks/useCalcProducts";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import BtnPrimary from "../../ui/styledComponents/styledButton/BtnPrimary";
import BtnOrdinary from "../../ui/styledComponents/styledButton/BtnOrdinary";
import {cartSelector} from "../../../redux/slices/cartSlice";
import {CartProduct} from "../../../@types/types";

const CartList = () => {
    const navigate = useNavigate()
    const cartState = useSelector(cartSelector)
    const cart = Object.values(cartState as CartProduct[])
    const {totalCount, totalPrice} = useTotalProducts(cart as CartProduct[])

    if (!cart.length) {
        return (
        <div>
            <h1 className='title'>Корзина пуста</h1>
            <BtnPrimary onClick={() => navigate('/')}>На главную</BtnPrimary>
        </div>
        )
    }


    return (
        <div>
            <TransitionGroup>
                {cart.map(product =>
                    <CSSTransition
                        key={product.id}
                        timeout={500}
                        classNames="post"
                    >
                        <CartItem
                            product={product}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
            <div>
                <strong>Итого:</strong>
                <div>
                    <div>
                        {totalCount} ед.
                        {totalPrice}$
                    </div>
                    {totalCount
                        ? <BtnOrdinary>Оформить заказ</BtnOrdinary>
                        : <></>}
                </div>
            </div>
        </div>
    );
};

export default CartList;
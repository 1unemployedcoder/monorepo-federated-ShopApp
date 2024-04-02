import React from 'react';
import {useTotalPrice} from "@/hooks/useCalcProducts";
import {changeCountCart, delCartItem} from "@/redux/slices/cartSlice";
import {useNavigate} from "react-router-dom";
import BtnOrdinary from "../../ui/styledComponents/styledButton/BtnOrdinary";
import {CartItemProps} from "@/@types/typesComponents";
import {useAppDispatch} from "@/redux/store";

const CartItem: React.FC<CartItemProps> = ({product}) => {
    const totalPrice = useTotalPrice(product.count, product.price)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <div className="post">
            <div onClick={() => navigate(`/products/${product.gadget}/${product.id}`)} className="post__content">
                <img src={product.img} alt={product.gadget}/>
                <div>
                    <strong>{product.gadget}</strong>
                    <div className='post__btnsCount' onClick={e => e.stopPropagation()}>
                        <BtnOrdinary onClick={() => dispatch(changeCountCart({id: product.id, value: 'minus' }))}>-</BtnOrdinary>
                        {product.count}
                        <BtnOrdinary onClick={() => dispatch(changeCountCart({id: product.id, value: 'plus' }))}>+</BtnOrdinary>
                    </div>
                    <div>
                        {product.price}$/шт
                    </div>
                    <strong>
                        {totalPrice}$
                    </strong>
                </div>
            </div>
            <div onClick={e => e.stopPropagation()} className="post__btns">
                <BtnOrdinary onClick={() => dispatch(delCartItem(product.id))}>Удалить продукт</BtnOrdinary>
            </div>
        </div>
    );
};

export default CartItem;

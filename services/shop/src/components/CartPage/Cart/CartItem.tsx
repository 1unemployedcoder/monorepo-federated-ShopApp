import React from 'react'
import { useTotalPrice } from '@/hooks/useCalcProducts'
import { changeCountCart, delCartItem } from '@/redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'
import BtnOrdinary from '../../ui/styledComponents/styledButton/BtnOrdinary'
import { type CartItemProps } from '@/@types/typesComponents'
import { useAppDispatch } from '@/redux/store'
import cl from '@/styles/modules/ProductItem.module.scss'
const CartItem: React.FC<CartItemProps> = ({ product }) => {
    const totalPrice = useTotalPrice(product.count, product.price)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <div className={cl.post}>
            <div onClick={() => { navigate(`/products/${product.gadget}/${product.id}`) }} className={cl.post__content}>
                <img src={product.img} alt={product.gadget}/>
                <div>
                    <strong>{product.gadget}</strong>
                    <div className={cl.post__btnsCount} onClick={e => { e.stopPropagation() }}>
                        <BtnOrdinary onClick={() => dispatch(changeCountCart({ id: product.id, value: 'minus' }))}>-</BtnOrdinary>
                        {product.count}
                        <BtnOrdinary onClick={() => dispatch(changeCountCart({ id: product.id, value: 'plus' }))}>+</BtnOrdinary>
                    </div>
                    <div>
                        {product.price}$/шт
                    </div>
                    <strong>
                        {totalPrice}$
                    </strong>
                </div>
            </div>
            <div onClick={e => { e.stopPropagation() }} className={cl.post__btns}>
                <BtnOrdinary onClick={() => dispatch(delCartItem(product.id))}>Удалить продукт</BtnOrdinary>
            </div>
        </div>
    )
}

export default CartItem

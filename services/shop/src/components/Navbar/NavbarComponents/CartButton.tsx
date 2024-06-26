import React from 'react'
import { useSelector } from 'react-redux'
import { useTotalProducts } from '@/hooks/useCalcProducts'
import { useNavigate } from 'react-router-dom'
import BtnOrdinary from '../../ui/styledComponents/styledButton/BtnOrdinary'
import { cartSelector } from '@/redux/slices/cartSlice'
import cl from '@/styles/modules/Navbar.module.scss'
const CartButton = () => {
    const cartState = useSelector(cartSelector)
    const cart = Object.values(cartState)
    const { totalCount, totalPrice } = useTotalProducts(cart)
    const navigate = useNavigate()
    return (
        <div>
            <BtnOrdinary data-testid='cartClick' onClick={() => { navigate('/shop/cart/') }}>
                {(totalCount !== 0)
                    ? <div className={cl.gold}>
                        {totalPrice}$
                    </div>
                    : <>Корзина</>
                }
            </BtnOrdinary>
            {(totalCount !== 0)
                ? <div>
                    <span className={cl.cartCount}>
                        {totalCount}
                    </span>
                </div>
                : <></>
            }
        </div>
    )
}

export default CartButton

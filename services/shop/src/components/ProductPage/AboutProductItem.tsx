import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { setCartItem } from '@/redux/slices/cartSlice'
import { useCartStatus } from '@/hooks/useCartStatus'
import IFButton from '../ui/styledComponents/styledButton/IF_Button'
import { useNavigate } from 'react-router-dom'
import BtnPrimary from '../ui/styledComponents/styledButton/BtnPrimary'
import { type ProductObjectProps } from '@/@types/typesComponents'
import { type MergeProductComments } from '@/@types/types'
import { useAppDispatch } from '@/redux/store'
import cl from '@/styles/modules/ProductPage.module.scss'
const AboutProductItem: React.FC<ProductObjectProps> = ({ product }) => {
    const dispatch = useAppDispatch()
    const isProduct = useCartStatus(product.id)
    const navigate = useNavigate()
    const addToCart = (product: MergeProductComments) => {
        dispatch(setCartItem(product))
        if (!toast.isActive(2, 1)) {
            toast.success(`${product.name} успешно добавлен в корзину`, {
                toastId: 2
            })
        }
    }
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className={cl.productPage}>
            <div className={cl.backBtn2}>
                <BtnPrimary onClick={handleGoBack}>Назад</BtnPrimary>
            </div>
            <ToastContainer containerId={1} position="top-center" autoClose={2000}/>
            <div className={cl.productPage__img}>
                <img src={product.img} alt=''/>
            </div>
            <div className={cl.productPage__content}>
                <div className={cl.productPage__desc}>
                    <div>{product.desc}</div>
                    <div>
                        <IFButton primary={!isProduct} onClick={() => { addToCart(product) }}>
                            {isProduct
                                ? <div>В корзине</div>
                                : <div>В корзину</div>
                            }
                            <div><b>{product.price}$</b></div>
                        </IFButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutProductItem

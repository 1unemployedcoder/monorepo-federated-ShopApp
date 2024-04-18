import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import useCommentsRating from '../../../hooks/useCommentsRating'
import { useNavigate } from 'react-router-dom'
import { setCartItem } from '@/redux/slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify'
import { useCartStatus } from '@/hooks/useCartStatus'
import IFButton from '../../ui/styledComponents/styledButton/IF_Button'
import BtnOrdinary from '../../ui/styledComponents/styledButton/BtnOrdinary'
import { type ProductObjectProps } from '@/@types/typesComponents'
import { type MergeProductComments } from '@/@types/types'
import { useAppDispatch } from '@/redux/store'
import cl from '@/styles/modules/ProductItem.module.scss'

const ProductItem: React.FC<ProductObjectProps> = ({ product }) => {
    const isProduct = useCartStatus(product.id)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const addToCart = (product: MergeProductComments) => {
        dispatch(setCartItem(product))
        if (!toast.isActive(product.id, product.id)) {
            toast.success(`${product.name} успешно добавлен в корзину`, {
                toastId: product.id
            })
        }
    }

    return (
        <div className={cl.post}>
            <ToastContainer containerId={product.id} position="top-center" autoClose={2000}/>
            <div onClick={() => { navigate(`/shop/products/${product.id}`) }} className={cl.post__content}>
                <img src={product.img} alt={product.name}/>
                <div className={cl.post__info}>
                    <div className={cl.post__open}>
                        <strong>{product.name}</strong>
                        <div className={cl.post__description}>
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.post__btns}>
                <div className={cl.post__btn}>
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
    )
}

export default ProductItem

import React from 'react';
import 'react-toastify/dist/ReactToastify.css'
import useCommentsRating from "../../../hooks/useCommentsRating";
import {useNavigate} from "react-router-dom";
import {setCartItem} from "../../../redux/slices/cartSlice";
import {ToastContainer, toast} from "react-toastify";
import {useCartStatus} from "../../../hooks/useCartStatus";
import IFButton from "../../ui/styledComponents/styledButton/IF_Button";
import BtnOrdinary from "../../ui/styledComponents/styledButton/BtnOrdinary";
import {ProductObjectProps} from "../../../@types/typesComponents";
import {MergeProductComments} from "../../../@types/types";
import {useAppDispatch} from "../../../redux/store";

const ProductItem: React.FC<ProductObjectProps> = ({ product }) => {
    const isProduct = useCartStatus(product.id)
    const {commentsLength, rating} = useCommentsRating(product.comments);
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const addToCart = (product: MergeProductComments) => {
        dispatch(setCartItem(product))
        if (!toast.isActive(product.id, product.id)) {
            toast.success(`${product.gadget} успешно добавлен в корзину`, {
                toastId: product.id
            })
        }
    }

    return (
        <div className="post">
            <ToastContainer containerId={product.id} position="top-center" autoClose={2000}/>
            <div onClick={() => navigate(`/products/${product.gadget}/${product.id}`)} className="post__content">
                <img src={product.img} alt={product.gadget}/>
                <div className="post__info">
                    <div className='post__open'>
                        <strong>{product.gadget}</strong>
                        <div className='post__description'>
                            {product.desc}
                        </div>
                    </div>
                </div>
            </div>
            <div className="post__btns">
                <div className='post__btn'>
                    <IFButton primary={!isProduct} onClick={() => addToCart(product)}>
                        {isProduct
                            ? <div>В корзине</div>
                            : <div>В корзину</div>
                        }
                        <div><b>{product.price}$</b></div>
                    </IFButton>
                </div>
                <div className='post__btn'>
                    <BtnOrdinary>
                        <div>Отзывы: {commentsLength}</div>
                        <div>{rating}/5</div>
                    </BtnOrdinary>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;

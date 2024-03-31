import {useSelector} from "react-redux";
import {useMemo} from "react";
import {cartSelector} from "../redux/slices/cartSlice";
import {CartProduct} from "../@types/types";

export const useCartStatus = (productId: number) => {
    const cartState = useSelector(cartSelector)
    const cart = Object.values(cartState) as CartProduct[]

    return useMemo(() => {
        return !!cart.find(p => p.id === productId);
    }, [cartState, productId])
}
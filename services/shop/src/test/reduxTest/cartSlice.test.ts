import { type CartRootState, cartSelectorTest } from '@/test/@types/reduxTestTypes'
import { cartReducer, cartTestInitState, changeCountCart, delCartItem, setCartItem } from '@/redux/slices/cartSlice'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { cartCountValue } from '@/@types/reduxTypes'
describe('cartSlice', () => {
    test('initCartSlice', () => {
        expect(cartSelectorTest({ cart: cartTestInitState }))
    })

    test('should return entities from cart state', () => {
        const fakeState: CartRootState = {
            cart: {
                entities: {
                    1: {
                        id: 1,
                        name: 'Product 1',
                        count: 2,
                        description: 'Lala',
                        img: 'placeholder',
                        price: 10
                    },
                    2: {
                        id: 2,
                        name: 'Product 2',
                        count: 1,
                        description: 'Bebe',
                        img: 'placeholder',
                        price: 12
                    }
                },
                ids: []
            }
        }

        const selectedCart = cartSelectorTest(fakeState)

        expect(selectedCart).toEqual({
            1: { id: 1, name: 'Product 1', count: 2, description: 'Lala', img: 'placeholder', price: 10 },
            2: { id: 2, name: 'Product 2', count: 1, description: 'Bebe', img: 'placeholder', price: 12 }
        })
    })

    test('setCartItem reducer', () => {
        const initialState = cartTestInitState

        const productData = {
            id: 1,
            name: 'Product 1',
            count: 1,
            description: 'Test Description',
            img: 'test.jpg',
            price: 10,
            productComments: []
        }
        const setCartItemAction = setCartItem(productData)
        const nextState = cartReducer(initialState, setCartItemAction)

        expect(nextState.entities[productData.id]).toEqual(productData)
        expect(nextState.ids).toContain(productData.id)
    })

    test('delCartItem reducer', () => {
        const initState = {
            entities: {
                1: {
                    id: 1,
                    name: 'Product 1',
                    count: 2,
                    description: 'Lala',
                    img: 'placeholder',
                    price: 10
                },
                2: {
                    id: 2,
                    name: 'Product 2',
                    count: 1,
                    description: 'Bebe',
                    img: 'placeholder',
                    price: 12
                }
            },
            ids: []
        }

        const delProduct = 1
        const delCartAction = delCartItem(delProduct)
        const nextState = cartReducer(initState, delCartAction)

        expect(nextState.entities[delProduct]).toBeUndefined()
        expect(nextState.entities[2]).not.toBeUndefined()
    })

    test('changeCountCart reducer', () => {
        const initState = {
            entities: {
                1: {
                    id: 1,
                    name: 'Product 1',
                    count: 2,
                    description: 'Lala',
                    img: 'placeholder',
                    price: 10
                },
                2: {
                    id: 2,
                    name: 'Product 2',
                    count: 1,
                    description: 'Bebe',
                    img: 'placeholder',
                    price: 12
                }
            },
            ids: []
        }

        const actionPlus: PayloadAction<{ id: number, value: cartCountValue }> = {
            payload: {
                id: 2,
                value: 'plus'
            },
            type: 'plus'
        }
        const actionMinus: PayloadAction<{ id: number, value: cartCountValue }> = {
            payload: {
                id: 1,
                value: 'minus'
            },
            type: 'minus'
        }
        const actionRemove: PayloadAction<{ id: number, value: cartCountValue }> = {
            payload: {
                id: 1,
                value: 'minus'
            },
            type: 'minus'
        }

        const plusCountAction = changeCountCart(actionPlus.payload)
        const minusCountAction = changeCountCart(actionMinus.payload)
        const removeCountAction = changeCountCart(actionRemove.payload)

        const plusNextState = cartReducer(initState, plusCountAction)
        const minusNextState = cartReducer(initState, minusCountAction)
        const removeNextState = cartReducer(minusNextState, removeCountAction)

        expect(plusNextState.entities[actionPlus.payload.id].count).toEqual(2)
        expect(minusNextState.entities[actionMinus.payload.id].count).toEqual(1)
        expect(removeNextState.entities[actionRemove.payload.id]).toBeUndefined()
    })
})

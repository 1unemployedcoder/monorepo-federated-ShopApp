import { render, screen } from '@testing-library/react'
import { App } from '@/App'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { MemoryRouter } from 'react-router-dom'
import Products from '@/pages/Products'
import axios from 'axios'
const axiosMock = jest.spyOn(axios, 'get')
describe('Router', () => {
    test('cart route', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        )
        const cartClick = screen.getByTestId('cartClick')

        await userEvent.click(cartClick)

        setTimeout(() => {
            expect(screen.getByTestId('cartLink')).toBeInTheDocument()
        }, 1000)
    })
    test('main route', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        )
        const mainClick = screen.getByTestId('mainClick')

        await userEvent.click(mainClick)

        setTimeout(() => {
            expect(screen.getByTestId('mainLink')).toBeInTheDocument()
        }, 1000)
    })
    test('undefined route', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/shop/qdfqf']}>
                    <App />
                </MemoryRouter>
            </Provider>
        )

        setTimeout(() => {
            expect(screen.getByTestId('undefinedLink')).toBeInTheDocument()
        }, 1000)
    })
    test('product details test', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Products />
                </MemoryRouter>
            </Provider>
        )
        const products = await screen.findAllByTestId('product')
        expect(products).toHaveLength(5)
        expect(axiosMock).toHaveBeenCalledTimes(1)
        await userEvent.click(products[0])
        setTimeout(() => {
            expect(screen.getByTestId('productPageLink')).toBeInTheDocument()
        }, 1000)
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
})

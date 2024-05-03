import { act, render, screen } from '@testing-library/react'
import { App } from '@/App'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { MemoryRouter } from 'react-router-dom'
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

        await act(async () => {
            await userEvent.click(cartClick)
        })

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

        await act(async () => {
            await userEvent.click(mainClick)
        })

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
})

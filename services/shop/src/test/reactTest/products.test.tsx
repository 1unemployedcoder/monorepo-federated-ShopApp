import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Products from "@/pages/Products";
describe('Chat tests', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Router>
                    <Products />
                </Router>
            </Provider>
        )
    })
    test('Testing products', async () => {

    })
})

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { App } from '@/App'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders text correctly', () => {
    render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
})

import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Chat } from '@/components/ChatSupport/Chat'
describe('Chat tests', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Router>
                    <Chat />
                </Router>
            </Provider>
        )
    })
    test('Open chat and login', async () => {
        const openChatButton = screen.getByText(/Открыть чат/i)
        fireEvent.click(openChatButton)

        const inputField = await screen.findByPlaceholderText(/Ваше имя:/i)
        expect(inputField).toBeVisible()

        fireEvent.change(inputField, { target: { value: 'TestUser' } })
        const enterButton = screen.getByText(/Войти/i)
        fireEvent.click(enterButton)

        const questionInput = await screen.findByPlaceholderText(/Ваш вопрос:/i)
        expect(questionInput).toBeVisible()
    })
})

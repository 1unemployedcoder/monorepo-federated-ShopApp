import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Chat } from '@/components/ChatSupport/Chat'
describe('Chat tests', () => {
    test('Open chat and login', async () => {
        render(
            <Provider store={store}>
                <Router>
                    <Chat />
                </Router>
            </Provider>
        )
        const openChatButton = screen.getByText(/Открыть чат/i)

        expect(screen.queryByText(/Ваше имя:/i)).toBeNull()

        await userEvent.click(openChatButton)

        const inputField = await screen.findByPlaceholderText(/Ваше имя:/i)
        expect(inputField).toBeVisible()

        await userEvent.type(inputField, 'TestUser')
        const enterButton = screen.getByText(/Войти/i)
        fireEvent.click(enterButton)

        const questionInput = await screen.findByPlaceholderText(/Ваш вопрос:/i)
        fireEvent.change(questionInput, { target: { value: 'Помогите' } })
        expect(questionInput).toBeVisible()
        expect(questionInput).toContainHTML('Помогите')
    })
})

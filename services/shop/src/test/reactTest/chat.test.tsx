import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Chat } from '@/components/ChatSupport/Chat'
import { WrapperReact } from '@/test/helpers/wrapperReact'
describe('Chat tests', () => {
    test('Open chat and login', async () => {
        WrapperReact(<Chat/>)
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

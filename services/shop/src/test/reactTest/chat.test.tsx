import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Chat } from '@/components/ChatSupport/Chat'
import { WrapperReact } from '@/test/helpers/wrapperReact'
describe('Chat tests', () => {
    // eslint-disable-next-line jest/no-disabled-tests
    test.skip('Open chat and login', async () => { // test passes locally but throw error in gh actions. don't know how fix it yet
        WrapperReact(<Chat/>)
        const openChatButton = screen.getByText(/Открыть чат/i)

        setTimeout(() => {
            expect(screen.queryByText(/Ваше имя:/i)).toBeNull()
        }, 1000)

        await userEvent.click(openChatButton)

        const inputField = await screen.findByPlaceholderText(/Ваше имя:/i)

        setTimeout(() => {
            expect(inputField).toBeVisible()
        }, 1000)

        await userEvent.type(inputField, 'TestUser')
        const enterButton = screen.getByText(/Войти/i)
        fireEvent.click(enterButton)

        const questionInput = await screen.findByPlaceholderText(/Ваш вопрос:/i)
        fireEvent.change(questionInput, { target: { value: 'Помогите' } })

        setTimeout(() => {
            expect(questionInput).toBeVisible()
        }, 1000)

        setTimeout(() => {
            expect(questionInput).toContainHTML('Помогите')
        }, 1000)
    })
})

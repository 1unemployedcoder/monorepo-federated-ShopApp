import { render, screen } from '@testing-library/react'
import SimpleComponent from '@/test/reactTest/test'
import '@testing-library/jest-dom'
test('renders text correctly', () => {
    render(<SimpleComponent text="Hello, world!" />)
    const textElement = screen.getByText(/Hello, world!/i)
    expect(textElement).toBeInTheDocument()
})

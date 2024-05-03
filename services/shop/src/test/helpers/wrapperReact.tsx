import React, { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
export const WrapperReact = (component: ReactNode, entries: string[] = ['/']) => {
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={entries}>
                {component}
            </MemoryRouter>
        </Provider>
    )
}

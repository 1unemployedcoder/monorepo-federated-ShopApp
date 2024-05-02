import styled, { css, StyleSheetManager } from 'styled-components'
import { type IFButtonProps } from '@/@types/types'
import React from 'react'

const IFButtonBase = styled.div<IFButtonProps>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: black;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;

    ${props =>
        props.primary
            ? css`
                        background: linear-gradient(0deg, #ff8200, #ff9700);
                    `
            : css`
                        background: transparent;
                        border: 1px #e7e6e6 solid;

                        &:hover {
                            background: linear-gradient(0deg, #ff8200, #ff9700);
                        }`
}
`

const withStyledButton = <P extends object>(Component: React.ComponentType<P>) => function foo (props: P & IFButtonProps) {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'primary'}>
            <Component {...props} />
        </StyleSheetManager>
    )
}

const IFButton = withStyledButton(IFButtonBase)

export default IFButton

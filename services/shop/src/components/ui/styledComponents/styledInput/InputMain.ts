import styled from 'styled-components'

const InputMain = styled.input`
    display: block;
    color: black;
    border: none;
    background-color: #e7e6e6;
    border-radius: 0.5rem;
    width: 60%;
    height: 2.5rem;
    padding: 0 0.8rem;
    box-sizing: border-box;

    &:active, &:hover, &:focus {
        outline: 0;
        outline-offset: 0;
    }
`

export default InputMain

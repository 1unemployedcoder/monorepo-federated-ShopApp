import styled from 'styled-components'

const BtnOrdinary = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: black;
    cursor: pointer;
    background: transparent;
    padding: 0.5rem 1.5rem;
    border: 1px #e7e6e6 solid;
    border-radius: 0.5rem;

    &:hover {
        background: linear-gradient(0deg, #ff8200, #ff9700);
    }
`

export default BtnOrdinary

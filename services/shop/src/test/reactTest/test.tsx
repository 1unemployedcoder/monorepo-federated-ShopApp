import React from 'react'

interface Props {
    text: string
}

const SimpleComponent: React.FC<Props> = ({ text }) => {
    return <div>{text}</div>
}

export default SimpleComponent

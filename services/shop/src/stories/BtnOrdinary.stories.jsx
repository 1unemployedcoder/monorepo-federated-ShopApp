import React from 'react'
import BtnOrdinary from '@/components/ui/styledComponents/styledButton/BtnOrdinary'
import IFButton from '@/components/ui/styledComponents/styledButton/IF_Button'
import BtnPrimary from '@/components/ui/styledComponents/styledButton/BtnPrimary'
import PropTypes from 'prop-types'
export default {
    title: 'Components/BtnOrdinary',
    component: [BtnOrdinary, BtnPrimary, IFButton],
    argTypes: {
        usePrimary: {
            control: 'boolean'
        }
    },
    tags: ['autodocs']
}
export const Ordinary = () => <BtnOrdinary>Ordinary</BtnOrdinary>
export const Primary = () => <BtnPrimary>Primary</BtnPrimary>

export const Optional = (props) => {
    return <IFButton primary={props.usePrimary}>IfButton</IFButton>
}
Optional.propTypes = {
    usePrimary: PropTypes.bool.isRequired
}
Optional.args = {
    usePrimary: false
}

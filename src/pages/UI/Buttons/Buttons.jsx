import React from 'react'

import { PrimaryButton } from './Buttons.styles';

export const Buttons = (props) => {
    switch(props.variant) {
        case "primary-button":
            return (<PrimaryButton {...props}>{props.children}</PrimaryButton>);
        default:
            return (<button>{props.children}</button>)
    }
}

Buttons.propTypes = {
    variant: "",
    children: []
}

export default Buttons;
// import './Custom-Button.style.scss'
import React from 'react'

// styles
import { ButtonStyle } from './Custom-Button.style'

const CustomButton = ({ children, ...otherProps }) => {
  return <ButtonStyle {...otherProps}>{children}</ButtonStyle>
}

export default CustomButton

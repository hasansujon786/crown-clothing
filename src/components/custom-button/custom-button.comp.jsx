import './Custom-Button.style.scss'
import React from 'react'

const CustomButton = ({ children, theme, ...otherProps }) => {
  return (
    <button className={`custom-button ${theme}`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton

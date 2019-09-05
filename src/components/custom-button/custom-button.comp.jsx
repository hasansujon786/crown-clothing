import './custom-button.style.scss'
import React from 'react'

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton

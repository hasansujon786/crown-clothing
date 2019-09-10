import './cart-dropdown.style.scss'
import React from 'react'

import Button from '../custom-button/custom-button.comp'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown

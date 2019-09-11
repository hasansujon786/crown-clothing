import './cart-dropdown.style.scss'
import React from 'react'
// redux
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector'

import Button from '../custom-button/custom-button.comp'
import CartItem from '../cart-item/cart-item.comp'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown)

import './Cart-Dropdown.style.scss'
import React from 'react'
import { withRouter } from 'react-router-dom'
// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
// componets
import Button from '../Custom-Button/Custom-Button.comp'
import CartItem from '../Cart-Item/Cart-Item.comp'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const pushToCheckout = () => {
    history.push('/checkout')
    dispatch(toggleCartHidden())
  }

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <span className='empty-message'>Your cart is empty.</span>
        )}
      </div>
      <Button onClick={() => pushToCheckout()}>GO TO CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))

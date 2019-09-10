import './cart-icon.style.scss'
import React from 'react'

// redux
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppinIcon } from '../../assets/svgs/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div onClick={toggleCartHidden} className='cart-icon'>
      <ShoppinIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapStateToProps = ({ cart: { cartItems } }) => {
  console.log('i m being called')

  return {
    itemCount: cartItems.reduce((accQuantity, cur) => accQuantity + cur.quantity, 0)
  }
}
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)

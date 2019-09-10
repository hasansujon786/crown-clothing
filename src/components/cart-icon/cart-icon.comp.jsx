import './cart-icon.style.scss'
import React from 'react'

// redux
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppinIcon } from '../../assets/svgs/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div onClick={toggleCartHidden} className='cart-icon'>
      <ShoppinIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(
  null,
  mapDispatchToProps
)(CartIcon)

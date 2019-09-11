import './cart-icon.style.scss'
import React from 'react'

// redux
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemCount } from '../../redux/cart/cart.selector'

import { ReactComponent as ShoppinIcon } from '../../assets/svgs/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div onClick={toggleCartHidden} className='cart-icon'>
      <ShoppinIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapStateToProps = state => ({
  itemCount: selectCartItemCount(state)
})
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)

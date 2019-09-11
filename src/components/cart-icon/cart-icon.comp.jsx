import './cart-icon.style.scss'
import React from 'react'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppinIcon } from '../../assets/svgs/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div onClick={toggleCartHidden} className='cart-icon'>
      <ShoppinIcon className='shopping-icon' />
      {console.log(Math.random())}
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
})
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)

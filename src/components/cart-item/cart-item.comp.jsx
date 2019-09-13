import './Cart-Item.style.scss'
import React from 'react'

const CartIem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='cart item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartIem

import React from 'react'
import './collection-item.style.scss'
import duck from './duck.jpg'

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${duck})` }}></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  )
}

export default CollectionItem

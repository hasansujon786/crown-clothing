import React from 'react'
import './menu-item.style.scss'

const MenuItem = ({ title, size, imageUrl }) => {
  return (
    <div className={`${size} menu-item`}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image'></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  )
}

export default MenuItem

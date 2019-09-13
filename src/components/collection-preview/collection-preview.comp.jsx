import React from 'react'
import './Collection-Preview.style.scss'
import { Link } from 'react-router-dom'
// components
import CollectionItem from '../Collection-Item/Collection-Item.comp'

const CollectionPreview = ({ title, routeName, items }) => {
  return (
    <div className='collection-preview'>
      <Link to={`/shop/${routeName}`}>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </Link>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview

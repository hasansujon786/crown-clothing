import React from 'react'
import './Collection.style.scss'
// redux
import { connect } from 'react-redux'
import { selectOneCollection } from '../../redux/shop/shop.selectors'
// components
import CollectionPreview from '../Collection-Item/Collection-Item.comp'

const Collection = ({ collection: { title, items } }) => {
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionPreview key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectOneCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(Collection)

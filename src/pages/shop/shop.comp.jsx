import React from 'react'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selectors'
// components
import CollectionPreview from '../../components/collection-preview/collection-preview.comp'

const Shop = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})
export default connect(mapStateToProps)(Shop)

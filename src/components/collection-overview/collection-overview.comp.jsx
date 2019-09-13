import React from 'react'
import './Collection-Overview.style.scss'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsAsArray } from '../../redux/shop/shop.selectors'

// components
import CollectionPreview from '../../components/Collection-Preview/Collection-Preview.comp'

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsAsArray
})
export default connect(mapStateToProps)(CollectionOverview)

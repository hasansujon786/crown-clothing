import React from 'react'
import { Route } from 'react-router-dom'

// components
import CollectionOverview from '../../components/collection-overview/collection-overview.comp'
import Collection from '../../components/Collection/Collection.comp'

const Shop = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route path={`${match.url}`} component={CollectionOverview} exact />
      <Route path={`${match.url}/:collectionId`} component={Collection} exact />
    </div>
  )
}

export default Shop

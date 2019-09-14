import React from 'react'
import './Collection-Item.style.scss'
// redux
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

// componets
import Button from '../Custom-Button/Custom-Button.comp'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}></div>

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button className='custom-button' onClick={() => addItem(item)} theme='inverted'>
        ADD TO CART
      </Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem)

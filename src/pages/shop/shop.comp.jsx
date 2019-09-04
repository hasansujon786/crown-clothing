import React, { Component } from 'react'
import SHOP_DATA from './shop.data'

class Shop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collection: SHOP_DATA
    }
  }

  render() {
    return (
      <div>
        <h1>shop</h1>
      </div>
    )
  }
}

export default Shop

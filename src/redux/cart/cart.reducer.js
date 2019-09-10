import cartActionTypes from './cart.types'

const INITIAL_STATE = {
  hidden: true
}

const cartReducer = (state = INITIAL_STATE, payload) => {
  switch (payload.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    default:
      return state
  }
}

export default cartReducer

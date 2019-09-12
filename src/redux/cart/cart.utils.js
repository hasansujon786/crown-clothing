export const addItemToCart = (cartItems, newItem) => {
  const foundCart = cartItems.find(item => item.id === newItem.id)

  if (foundCart) {
    return cartItems.map(item =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  }

  return [...cartItems, { ...newItem, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const foundCart = cartItems.find(cartItem => cartItem.id === itemToRemove.id)

  if (foundCart.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
  }

  return cartItems.map(cartItem =>
    cartItem.id === itemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  )
}

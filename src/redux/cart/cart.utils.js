export const addItemToCart = (cartItems, newItem) => {
  const cartExists = cartItems.find(item => item.id === newItem.id)

  if (cartExists) {
    return cartItems.map(item =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  }

  return [...cartItems, { ...newItem, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, newItem) => {
  const cartExists = cartItems.find(cartItem => cartItem.id === newItem.id)

  if (cartExists.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== newItem.id)
  }

  return cartItems.map(cartItem =>
    cartItem.id === newItem.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  )
}

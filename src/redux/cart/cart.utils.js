export const addToCartItem = (cartItems, newItem) => {
  const cartExists = cartItems.find(item => item.id === newItem.id)

  if (cartExists) {
    return cartItems.map(item =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  }

  return [...cartItems, { ...newItem, quantity: 1 }]
}

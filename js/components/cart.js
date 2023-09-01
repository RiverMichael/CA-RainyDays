const cartItems = localStorage.getItem("cartItems");

/**
 * Gets the cart items from localstorage
 * @returns The cart items as JSON
 */
export function getCartItems() {
  if (cartItems === null) {
    return [];
  } else {
    return JSON.parse(cartItems);
  }
}

/**
 * Saves an item to the cart using localstorage
 * @param {*} cartItems The item to save
 */
export function saveCart(cartItems) {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

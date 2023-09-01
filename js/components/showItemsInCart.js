import { getCartItems } from "./cart.js";
const cartCircle = document.querySelector(".circle");

/**
 * Displays if there is any products in the cart
 */
function showItemsInCart() {
  const cartItems = getCartItems();
  if (cartItems.length > 0) {
    cartCircle.style.display = "block";
  } else {
    cartCircle.style.display = "none";
  }
}
showItemsInCart();

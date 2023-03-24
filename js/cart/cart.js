const cartItems = localStorage.getItem("cartItems");
const displayIfItemInCart = document.querySelector(".circle");

export function getCartItems() {
    if (cartItems === null) {
        return [];
    } else {
        return JSON.parse(cartItems);
    }
};

export function saveCart(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};


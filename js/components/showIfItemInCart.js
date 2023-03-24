const cartItems = localStorage.getItem("cartItems");
const displayIfItemInCart = document.querySelector(".circle");

if (cartItems.length > 2) {
    displayIfItemInCart.style.display = "block";
} else {
    displayIfItemInCart.style.display = "none";
};

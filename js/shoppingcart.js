import { getCartItems, saveCart } from "./components/cart.js";
import { clearHtml, createShoppingBagHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";

const iconArrowLeft = document.querySelector(".icon__back");
iconArrowLeft.addEventListener("click", function() {
    history.back();
});

const shoppingbagContainer = document.querySelector(".shoppingcart__card-wrapper");
const itemsContainer = document.querySelector(".shoppingcart__wrapper");
const totalPriceContainer = document.querySelector(".total-price__span");
const checkoutButton = document.querySelector(".shoppingcart__action a");
checkoutButton.style.display = "none";

const cartItems = getCartItems();
let totalPrice = 0;

function getShoppingBag() {
    try {
        renderShoppingbagItems(cartItems, itemsContainer);
        removeCartItem();
    }
    catch(error) {
        console.log(error);
        clearHtml(shoppingbagContainer);
        createMessage(shoppingbagContainer, "error", "There was an error while loading this page, please try again");
    }
};
getShoppingBag();

function renderShoppingbagItems(items, parentElement) {
    if (items.length === 0) {
        parentElement.innerText = "There is no item in your shopping cart";
    } else {
        items.forEach((item) => {
            createShoppingBagHtml(item, parentElement);
            totalPrice += item.price;
            totalPriceContainer.innerText = totalPrice;
            checkoutButton.style.display = "inline-block";
        });
    }
};

function removeCartItem() {
    const removeItemButton = document.querySelectorAll(".remove-item");

    removeItemButton.forEach((button) => {
        button.addEventListener("click", function() {
        const itemContainer = button.closest(".shoppingcart-item");
        const itemName = itemContainer.querySelector("h2").innerText;
        const itemSize = itemContainer.querySelector("p").innerText;
        const removedItem = cartItems.find((item) => item.name === itemName && item.size === itemSize);
        const cartItemId = removedItem.cartId;

        const newCart = cartItems.filter((item) => item.cartId !== cartItemId);
        saveCart(newCart);
        itemContainer.remove();

        window.location.reload();
    });
});
};

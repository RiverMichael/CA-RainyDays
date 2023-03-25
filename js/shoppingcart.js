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
        getTotalPrice(cartItems, totalPriceContainer);
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
            checkoutButton.style.display = "inline-block";
        });
    }
};

function getTotalPrice(items, parentElement) {
    items.forEach((item) => {
        clearHtml(parentElement);
        totalPrice += item.price;
        parentElement.innerText = totalPrice;
    })
};


function removeCartItem() {
    const removeItemButton = document.querySelectorAll(".remove-item");

    removeItemButton.forEach((button) => {
        button.addEventListener("click", function() {
        const itemContainer = button.closest(".shoppingcart-item");
        const itemName = itemContainer.querySelector("h2").innerText;
        const itemSize = itemContainer.querySelector("p").innerText;
        const removeItem = cartItems.find((item) => item.name === itemName) && cartItems.find((item) => item.size === itemSize);
        const cartItemId = removeItem.cartId;

        const newCart = cartItems.filter((item) => item.cartId !== cartItemId);
        saveCart(newCart);
        itemContainer.remove();
        
        totalPrice -= removeItem.price;

        window.location.reload();
    });
});
};
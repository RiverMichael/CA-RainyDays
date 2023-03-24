import products from "./data/products.js";
import { clearHtml, createProductDetailsHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";
import { getCartItems, saveCart } from "./cart/cart.js";

const iconArrowLeft = document.querySelector(".icon__back");
iconArrowLeft.addEventListener("click", function() {
    history.back();
});

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const getId = params.get("id");
const productId = JSON.parse(getId);
const product = products.find(({ id }) => id === productId);

document.title = `RainyDays | Products | ${product.name}`;

const productContainer = document.querySelector(".product");
const messageContainer = document.querySelector(".message");

function getProductDetails() {
    try {
        createProductDetailsHtml(product, productContainer);
    }
    catch (error) {
        console.log(error);
        createMessage(messageContainer, "error", "There was an error while loading this page, please try again");
    }
};
getProductDetails();

// Add To Cart
const sizeForm = document.querySelector("#size-form");
const sizeFormValidation = document.querySelector(".size-form-validation");

sizeForm.addEventListener("submit", addToCart);

function addToCart(event) {
    const cartItemId = Math.floor(Math.random() * (999 - 1 + 1) + 1);
    const itemName = product.name;
    const itemId = product.id;
    let itemSize = "";
    const itemPrice = product.price;
    const itemImage = product.image;
   
    const cartItems = getCartItems();

    const sizes = document.querySelectorAll("input[name = size]")
    sizes.forEach(size => {
        if(size.checked === true) {
            itemSize = size.value;
        };
    });
    
    const item = { cartId: cartItemId, name: itemName, id: itemId, size: itemSize, price: itemPrice, image: itemImage };    

    clearHtml(sizeFormValidation);

    if (itemSize) {
        createMessage(sizeFormValidation, "success", `You added one ${itemName} rainjacket size ${itemSize} to your shopping bag`);
        cartItems.push(item);
        saveCart(cartItems);
        const displayIfItemInCart = document.querySelector(".circle");
        displayIfItemInCart.style.display = "block";
        
    } else {
        createMessage(sizeFormValidation, "error", "Please choose a size");
    }

    event.preventDefault();
};

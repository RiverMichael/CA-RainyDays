import { getProductDetails, renderProductDetails } from "./components/render.js";
import { clearHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";
import { getCartItems, saveCart } from "./components/cart.js";

const iconArrowLeft = document.querySelector(".icon__back");
iconArrowLeft.addEventListener("click", function() {
    history.back();
});

const productContainer = document.querySelector(".product");
const messageContainer = document.querySelector(".message");

async function productDetails() {
    const product = await getProductDetails();
    try {
        clearHtml(productContainer);
        renderProductDetails(product, productContainer);
    }
    catch(error) {
        console.log(error);
        createMessage(messageContainer, "error", "There was an error while loading this page, please try again");
    };

    const sizeForm = document.querySelector("#size-form");
    sizeForm.addEventListener("submit", addToCart);

    function addToCart(event) {
        const cartItems = getCartItems();
        const cartItemId = Math.floor(Math.random() * (999 - 1 + 1) + 1);
        const itemName = product.name;
        const itemId = product.id;
        let itemSize = "";
        const itemPrice = product.prices.regular_price;
        const itemImage = product.images[0].src;
        const itemImageAlt = product.images[0].alt;
        const sizeFormValidation = document.querySelector(".size-form-validation");
        const sizes = document.querySelectorAll("input[name = size]");
    
        sizes.forEach(size => {
            if(size.checked === true) {
                itemSize = size.value;
            };
        }); 
    
        let item = { cartId: cartItemId, name: itemName, id: itemId, size: itemSize, price: itemPrice, image: itemImage, imageAlt: itemImageAlt };
    
        if (product.on_sale === true) {
            const onSalePrice = product.prices.sale_price;
            item.onSalePrice = onSalePrice;
        };
    
        clearHtml(sizeFormValidation);
    
        if (itemSize) {
            createMessage(sizeFormValidation, "success", `You added one ${itemName} rainjacket size ${itemSize} to your shopping cart`);
            cartItems.push(item);
            saveCart(cartItems);
            const displayItemInCart = document.querySelector(".circle");
            displayItemInCart.style.display = "block";
        } else {
            createMessage(sizeFormValidation, "error", "Please choose a size");
        };
        event.preventDefault();
    };
};
productDetails();

import products from "./data/products.js";
import { renderProducts } from "./components/render.js";
import { createMessage } from "./components/createMessage.js";

const cardContainer = document.querySelector(".product-list");
const messageContainer = document.querySelector(".message");

function getProducts() {
    try {
        renderProducts(products, cardContainer);
    }
    catch(error) {
        console.log(error);
        createMessage(messageContainer, "error", "There was an error while loading this page, please try again");
    }
};
getProducts();

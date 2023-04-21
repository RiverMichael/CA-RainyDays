import { getProducts, renderProducts } from "./components/render.js";
import { clearHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";

const productsContainer = document.querySelector(".products");
const messageContainer = document.querySelector(".message");

async function productsPage() {
    const products = await getProducts();
    try {
        clearHtml(productsContainer);
        renderProducts(products.reverse(), productsContainer);
    }
    catch(error) {
        console.log(error);
        createMessage(messageContainer, "error", "There was an error while loading this page, please try again");
    };
};
productsPage();

import { getProducts } from "./render.js";
import { clearHtml } from "./createHtml.js";
import { renderProducts } from "./render.js";

const productsContainer = document.querySelector(".products");

export async function sortProducts(event) {
    let products = await getProducts();
    const selected = event.target.value;

    if (selected === "price-low-high") {
        products = products.sort((a, b) => parseFloat(a.prices.price) - parseFloat(b.prices.price));
    } else if (selected === "price-high-low") {
        products = products.sort((a, b) => parseFloat(b.prices.price) - (a.prices.price));
    } else if (selected === "name-az") {
        products = products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selected === "name-za") {
        products = products.sort((a, b) => b.name.localeCompare(a.name));
    }

    clearHtml(productsContainer);
    renderProducts(products, productsContainer);
};

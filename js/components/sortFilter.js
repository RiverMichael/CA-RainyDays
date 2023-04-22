import { getProducts } from "./render.js";
import { clearHtml } from "./createHtml.js";
import { renderProducts } from "./render.js";

const productsContainer = document.querySelector(".products");

export async function sortProducts(event) {
    const products = await getProducts();
    let sortedProducts = products;
    const selected = event.target.value;

    if (selected === "price-low-high") {
        sortedProducts = sortedProducts.sort((a, b) => parseFloat(a.prices.price) - parseFloat(b.prices.price));
    } else if (selected === "price-high-low") {
        sortedProducts = sortedProducts.sort((a, b) => parseFloat(b.prices.price) - (a.prices.price));
    } else if (selected === "name-az") {
        sortedProducts = sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selected === "name-za") {
        sortedProducts = sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    
    clearHtml(productsContainer);
    renderProducts(sortedProducts, productsContainer);
};

export async function filterProducts(event) {
    const products = await getProducts();
    let filteredProducts = products;
    let selected = event.target.value;

    if (selected === "all") {
        filteredProducts = products;
    } else {
        filteredProducts = filteredProducts.filter((product) => product.attributes[1].terms[0].name === selected)
    };
   
    clearHtml(productsContainer);
    renderProducts(filteredProducts, productsContainer);
};

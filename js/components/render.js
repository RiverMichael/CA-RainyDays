import { createProductCardHtml } from "./createHtml.js";

export function renderProducts(products, parentElement) {
    products.forEach(function(product) {
        createProductCardHtml(product, parentElement);
    });
};

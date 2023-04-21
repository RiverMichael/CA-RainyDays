import { createProductCardHtml, createFeaturedProductHtml, createProductDetailsHtml } from "./createHtml.js";

const api = "https://api.michaelriver.dev/";
const productBase = "wp-json/wc/store/products/";
const featuredProducts = "?featured=true";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const productsURL = api + productBase;
const featuredProductsURL = api + productBase + featuredProducts;
const productDetailsURL = api + productBase + id;

async function getApi(url) {
    const response = await fetch (url);
    const results = await response.json();
    return results;
};

export async function getProducts() {
    return await getApi(productsURL);
};

export async function getFeaturedProducts() {
    return await getApi(featuredProductsURL);
};

export async function getProductDetails() {
    return await getApi(productDetailsURL);
};

export function renderProducts(products, parentElement) {
    products.forEach(product => {
        createProductCardHtml(product, parentElement);
    });
};

export function renderFeaturedProducts(products, parentElement) {
    products.forEach(product => {
        createFeaturedProductHtml(product, parentElement);
    });
};

export function renderProductDetails(product, parentElement) {
    createProductDetailsHtml(product, parentElement);
};

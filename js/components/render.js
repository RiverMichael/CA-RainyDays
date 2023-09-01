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

/**
 * Fetches a response from an API
 * @param {*} url The URL of the API
 * @returns The API response in JSON
 * @example
 * const apiUrl = "https://api.url.com/wp-json/wc/store/products";
 *
 * async function getProducts() {
 * return await getApi(apiUrl);
 * }
 */
async function getApi(url) {
  const response = await fetch(url);
  const results = await response.json();
  return results;
}

/**
 * Fetches all the products from the API
 * @returns The API response in JSON
 * @example
 * const products = await getProducts();
 */
export async function getProducts() {
  return await getApi(productsURL);
}

/**
 * Fetches the featured products
 * @returns The API response in JSON
 * @example const featuredProducts = await getFeaturedProducts();
 */
export async function getFeaturedProducts() {
  return await getApi(featuredProductsURL);
}

/**
 * Fetches a specific product from the API
 * @returns The API response in JSON
 * @example
 * const product = await getProductDetails();
 */
export async function getProductDetails() {
  return await getApi(productDetailsURL);
}

/**
 * Renders and displays the products
 * @param {*} products The products to display
 * @param {*} parentElement The element to append the products to
 */
export function renderProducts(products, parentElement) {
  products.forEach((product) => {
    createProductCardHtml(product, parentElement);
  });
}

/**
 * Renders and displays the featured products
 * @param {*} products The products to display
 * @param {*} parentElement The element to append the products to
 */
export function renderFeaturedProducts(products, parentElement) {
  products.forEach((product) => {
    createFeaturedProductHtml(product, parentElement);
  });
}

/**
 * Renders and displays a specific product
 * @param {*} product The product to display
 * @param {*} parentElement The element to append the product to
 */
export function renderProductDetails(product, parentElement) {
  createProductDetailsHtml(product, parentElement);
}

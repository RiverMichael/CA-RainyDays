import { getFeaturedProducts, renderFeaturedProducts } from "./components/render.js";
import { clearHtml, createSubscribeValidationHtml } from "./components/createHtml.js";
import { validateEmail } from "./components/formValidation.js";
import { createMessage } from "./components/createMessage.js";

// Bestsellers Section
const productsContainer = document.querySelector(".featured");

async function featuredProducts() {
    const products = await getFeaturedProducts();
    try {
        clearHtml(productsContainer);
        renderFeaturedProducts(products, productsContainer);
    }
    catch(error) {
        console.log(error);
        createMessage(productsContainer, "error", "There was an error while loading the products, please try again");
    };
};
featuredProducts();

// Subscribe Validation
const subscribeContainer = document.querySelector(".subscribe");
const form = document.querySelector("#subscribe-form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

form.addEventListener("submit", subscribeValidation);

function subscribeValidation(event) {
    event.preventDefault();

    if (validateEmail(email, email.value, emailError)) {
        clearHtml(subscribeContainer);
        createSubscribeValidationHtml(subscribeContainer);
    };
};

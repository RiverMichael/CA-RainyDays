import { clearHtml, createSubscribeValidationHtml } from "./components/createHtml.js";
import { validateEmail } from "./components/formValidation.js";

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
    }
};

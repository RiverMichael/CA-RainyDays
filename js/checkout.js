import { clearHtml, createCheckoutSuccessHtml } from "./components/createHtml.js";
import { validateMinLength, validateLength } from "./components/formValidation.js";
import { saveCart } from "./components/cart.js";

const iconArrowLeft = document.querySelector(".icon__back");
iconArrowLeft.addEventListener("click", function() {
    history.back();
});

const form = document.querySelector("#checkoutform");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adress-error");
const zipcode = document.querySelector("#zipcode");
const zipcodeError = document.querySelector("#zipcode-error");
const city = document.querySelector("#city");
const cityError = document.querySelector("#city-error");
const country = document.querySelector("#country");
const countryError = document.querySelector("#country-error");
const cardname = document.querySelector("#cardname");
const cardnameError = document.querySelector("#cardname-error");
const cardnumber = document.querySelector("#cardnumber");
const cardnumberError = document.querySelector("#cardnumber-error");
const expdate = document.querySelector("#expdate");
const expdateError = document.querySelector("#expdate-error");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvc-error");
const checkoutSuccessContainer = document.querySelector("main");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    let formSuccess = true;

    if (validateMinLength(name.value, 1)) {
        nameError.style.display = "none";
        name.style.border = "1px solid var(--clr-dark)";
    } else {
        nameError.style.display = "block";
        name.style.border = "2px solid var(--clr-error)";
        formSuccess = false;
    };

    if (validateMinLength(adress.value, 1)) {
        adressError.style.display = "none";
        adress.style.border = "1px solid var(--clr-dark)";
    } else {
        adressError.style.display = "block";
        adress.style.border = "2px solid var(--clr-error)";
        formSuccess = false;
    };

    if (validateMinLength(zipcode.value, 1)) {
        zipcodeError.style.display = "none";
        zipcode.style.border = "1px solid var(--clr-dark)";
    } else {
        zipcodeError.style.display = "block";
        zipcode.style.border = "2px solid var(--clr-error)";
        formSuccess = false;
    };

    if (validateMinLength(city.value, 1)) {
        cityError.style.display = "none";
        city.style.border = "1px solid var(--clr-dark)";
    } else {
        cityError.style.display = "block";
        city.style.border = "2px solid var(--clr-error)";
        formSuccess = false;
    };

    if (validateMinLength(country.value, 1)) {
        countryError.style.display = "none";
        country.style.border = "1px solid var(--clr-dark)";
    } else {
        countryError.style.display = "block";
        country.style.border = "2px solid var(--clr-error)";
        formSuccess = false;
    };

    if (validateMinLength(cardname.value, 1)) {
        cardnameError.style.display = "none";
        cardname.style.border = "1px solid var(--clr-dark)";
    } else {
        cardnameError.style.display = "block";
        cardname.style.border = "2px solid var(--clr-error)";
        formSuccess = false;
    };

    if (validateLength(cardnumber.value, 16)) {
        cardnumberError.style.display = "none";
        cardnumber.style.border = "1px solid var(--clr-dark)";
    } else {
        cardnumberError.style.display = "block";
        cardnumber.style.border = "2px solid var(--clr-error)";
        formSuccess = false;
    };

    if (validateLength(expdate.value, 4)) {
        expdateError.style.display = "none";
        expdate.style.border = "1px solid var(--clr-dark)";
    } else {
        expdateError.style.display = "block";
        expdate.style.border = "2px solid var(--clr-error)";
        formSuccess = false;
    };

    if (validateLength(cvc.value, 3)) {
        cvcError.style.display = "none";
        cvc.style.border = "1px solid var(--clr-dark)";
    } else {
        cvcError.style.display = "block";
        cvc.style.border = "2px solid var(--clr-error)";
        formSuccess = false;
    };

    if (formSuccess) {
        clearHtml(checkoutSuccessContainer);
        checkoutSuccessContainer.classList.add("checkout-success__wrapper");
        createCheckoutSuccessHtml(checkoutSuccessContainer);
        saveCart([]);
    };
};

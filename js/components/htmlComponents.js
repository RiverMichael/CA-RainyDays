
// Subscribe Validation Elements
function createSubscribeValidationContainer(backgroundImage, children) {
    return createHtmlElements("div", ["subscribe-background", "flex"], children, undefined, backgroundImage);
};

function createContainerWrapper(children) {
    return createHtmlElements("div", ["subscribe__wrapper", "container", "flex"], children);
};

function createValidationHeading(text) {
    return createHtmlElements("h2", undefined, undefined, text);
};

function createLinkDiv(children) {
    return createHtmlElements("div", undefined, children);
};

function createExploreLink(linkText, linkUrl) {
    return createHtmlElements("a", ["cta", "cta-big"], undefined, linkText, undefined, undefined, undefined, linkUrl);
};


// Products Page Elements
function createProductLink(children, linkUrl) {
    return createHtmlElements("a", ["card-link"], children, undefined, undefined, undefined, undefined, linkUrl);
};

function createProductCard(children) {
    return createHtmlElements("div", ["product-card"], children);
};

function createProductImage(backgroundImage) {
    return createHtmlElements("div", ["card-image"], undefined, undefined, backgroundImage);
};  

function createProductCardDetails(children) {
    return createHtmlElements("div", ["product-card__details", "flex"], children);
};

function createProductTitle(titleText) {
    return createHtmlElements("h2", undefined, undefined, titleText);
};

function createProductText(productText) {
    return createHtmlElements("p", undefined, undefined, productText);
};

function createPriceSymbol(priceSymbol) {
    return createHtmlElements("p", ["price"], undefined, priceSymbol);
};

function createProductPrice(price) {
    return createHtmlElements("span", ["price"], undefined, price);
};


// ProductDetails Page Elements

function createProductDetailsContainer(children) {
    return createHtmlElements("div", ["product__wrapper", "split"], children);
};

function createProductDetailsImageWrapper(children) {
    return createHtmlElements("div", ["product-images__wrapper", "flex"], children);
};

function createProductDetailsImage(image, altText) {
    return createHtmlElements("img", ["product-image"], undefined, undefined, undefined, image, altText);
};

function createProductThumbnailsContainer(children) {
    return createHtmlElements("div", ["product-thumbnails", "flex"], children);
};

function createThumbnailImage(image, altText) {
    return createHtmlElements("img", ["product-thumbnails__image"], undefined, undefined, undefined, image, altText);
};

function createProductDetails(children) {
    return createHtmlElements("div", ["product-details", "flex"], children);
};

function createProductDetailsTitle(titleText) {
    return createHtmlElements("h1", undefined, undefined, titleText);
};

function createProductDetailsDescription(descriptionText) {
    return createHtmlElements("p", ["product-details__description"], undefined, descriptionText);
};

function createProductSizeForm(children) {
    return createHtmlElements("form", ["size-form", "flex"], children, undefined, undefined, undefined, undefined, undefined, "size-form");
};

function createSizeFormFieldset(children) {
    return createHtmlElements("fieldset", undefined, children);
};

function createFieldsetLegend(legendText) {
    return createHtmlElements("legend", ["visually-hidden"], undefined, legendText);
};

function createSizeFormSelect(children) {
    return createHtmlElements("div", ["size-form__select", "flex"], children);
};

function createSizeInputsContainer(children) {
    return createHtmlElements("div", ["size", "flex"], children);
};

function createSizeInput(id) {
    return createHtmlElements("input", undefined, undefined, undefined, undefined, undefined, undefined, undefined, id, "radio", "size");
};

function createInputLabel(labelText) {
    return createHtmlElements("label", undefined, undefined, labelText);
};

function createsizeFormButton(buttonText) {
    return createHtmlElements("button", ["cta"], undefined, buttonText);
};

function createSizeError() {
    return createHtmlElements("div", ["size-form-validation"], undefined);
};


// Checkout Validation Elements
function createCheckoutSuccessContainer(children, backgroundImage) {
    return createHtmlElements("section", ["checkout-success", "flex"], children, undefined, backgroundImage);
};

function createCheckoutSuccessTitle(titleText) {
    return createHtmlElements("h1", undefined, undefined, titleText);
};

function createCheckoutSuccessText(text) {
    return createHtmlElements("p", undefined, undefined, text);
};

function createCheckoutSuccessActionContainer(children) {
    return createHtmlElements("div", ["checkout-success__action"], children);
};

function createCheckoutSuccessActionButton(linkText, linkUrl) {
    return createHtmlElements("a", ["cta", "cta-big"], undefined, linkText, undefined, undefined, undefined, linkUrl);
};


// Create Shoppingbag Elements
function createShoppingbagItem(children) {
    return createHtmlElements("div", ["shoppingcart-item", "flex"], children);
};

function createShoppingbagImageContainer(children) {
    return createHtmlElements("div", ["shoppingcart-item__image"], children);
};

function createShoppingbagItemLink(linkUrl, children) {
    return createHtmlElements("a", undefined, children, undefined, undefined, undefined, undefined, linkUrl);
};

function createShoppingbagItemImage(image, altText) {
    return createHtmlElements("img", ["product__image"], undefined, undefined, undefined, image, altText);
};

function createShoppingbagItemDetails(children) {
    return createHtmlElements("div", ["shoppingcart-details", "flex"], children);
};

function createShoppingbagItemInfo(children) {
    return createHtmlElements("div", ["shoppingcart-item__info", "flex"], children);
};

function createShoppingbagItemTitle(titleText) {
    return createHtmlElements("h2", undefined, undefined, titleText);
};

function createShoppingbagItemSize(size) {
    return createHtmlElements("p", undefined, undefined, size);
};

function createShoppingbagPriceContainer(children) {
    return createHtmlElements("div", ["shoppingcart-item__price", "flex"], children);
};

function createShoppingbagItemPriceSymbol(priceSymbol) {
    return createHtmlElements("p", undefined, undefined, priceSymbol);
};

function createShoppingbagPrice(price) {
    return createHtmlElements("span", undefined, undefined, price);
};

function createShoppingbagTotalPriceContainer(children) {
    return createHtmlElements("div", ["shoppingcart__total"], children);
};

function createShoppingbagTotal(priceSymbol) {
    return createHtmlElements("p", ["total-price"], undefined, priceSymbol);
};

function createShoppingbagItemRemove(image, altText) {
    return createHtmlElements("img", ["remove-item", "link"], undefined, undefined, undefined, image, altText);
};

// Create Html Elements
function createHtmlElements(tagname, classes, children, text, background, image, altText, link, id, inputType, inputName) {
    const element = document.createElement(tagname);

    if (Array.isArray(classes) && classes.length) {
        element.classList.add(...classes);
    }
    if (Array.isArray(children) && children.length) {
        element.append(...children);
    }
    if (text) {
        element.innerText = text;
    }
    if (background) {
        element.style = background;
    }
    if (image) {
        element.src = image;
    }
    if (altText) {
        element.alt = altText;
    }
    if (link && tagname === "a") {
        element.href = link;
    }
    if (id) {
        element.id = id;
    }
    if (tagname === "input" && inputType) {
        element.type = inputType;
        element.value = id;
        element.name = inputName;
    }
   
    return element;
};

export default { createProductLink, createProductCard, createProductImage, createProductCardDetails, createProductTitle, createProductText, createPriceSymbol, createProductPrice, createSubscribeValidationContainer, createContainerWrapper, createValidationHeading, createLinkDiv, createExploreLink, createProductDetailsTitle, createProductDetailsImageWrapper, createProductDetailsImage, createProductThumbnailsContainer, createProductDetails, createProductDetailsDescription, createProductSizeForm, createProductDetailsContainer, createThumbnailImage, createSizeFormFieldset, createFieldsetLegend, createSizeFormSelect, createSizeInputsContainer, createSizeInput, createInputLabel, createsizeFormButton, createCheckoutSuccessActionButton, createCheckoutSuccessActionContainer, createCheckoutSuccessContainer, createCheckoutSuccessText, createCheckoutSuccessTitle, createShoppingbagPrice, createShoppingbagItemPriceSymbol, createShoppingbagImageContainer, createShoppingbagItem, createShoppingbagItemInfo, createShoppingbagItemTitle, createShoppingbagItemImage, createShoppingbagItemLink, createShoppingbagTotal, createShoppingbagTotalPriceContainer, createShoppingbagPriceContainer, createShoppingbagItemSize, createShoppingbagItemDetails, createShoppingbagItemRemove, createSizeError };
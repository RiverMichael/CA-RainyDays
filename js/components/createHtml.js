import htmlComponents from "./htmlComponents.js";

export function clearHtml(parentElement) {
    parentElement.innerHTML = "";
};

// Subscribe Validation
export function createSubscribeValidationHtml(parentElement) {
    const validationHtml = createSubscribeValidationElements();
    parentElement.append(validationHtml); 
};

function createSubscribeValidationElements() {
    const validationHeading = htmlComponents.createValidationHeading("Thank you for following our journey towards great adventures");
    const exploreLink = htmlComponents.createExploreLink("Explore our products", "men.html");
    const divLink = htmlComponents.createLinkDiv([exploreLink]);
    const containerWrapper = htmlComponents.createContainerWrapper([validationHeading, divLink]);
    const validationContainer = htmlComponents.createSubscribeValidationContainer("background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../images/road-to-the-journey.jpg); background-position: center 70%; background-size: cover;", [containerWrapper]);

    return validationContainer;
};


// Products Page
export function createProductCardHtml(product, parentElement) {
    const cardHtml = createProductCardElements(product);
    parentElement.append(cardHtml);
};

function createProductCardElements(product) {
    const productTitle = htmlComponents.createProductTitle(product.name);
    const productText = htmlComponents.createProductText(product.summary);
    const productPriceSymbol = htmlComponents.createPriceSymbol("€ ");
    const productPrice = htmlComponents.createProductPrice(product.price);
    productPriceSymbol.appendChild(productPrice);
    const productCardDetails = htmlComponents.createProductCardDetails([productTitle, productText, productPriceSymbol]);

    const productImage = htmlComponents.createProductImage(`background-image: url(${product.image})`);
    const productCard = htmlComponents.createProductCard([productImage, productCardDetails]);
    const productLink = htmlComponents.createProductLink([productCard], `productdetails.html?id=${product.id}`);

    return productLink;
};


// ProductDetails Page
export function createProductDetailsHtml(product, parentElement) {
    const detailsHtml = createProductDetailsElements(product);
    parentElement.append(detailsHtml);
};

function createProductDetailsElements(product) {
    // Images
    const productImage = htmlComponents.createProductDetailsImage(product.image, product.name);
    const thumbnail1 = htmlComponents.createThumbnailImage(product.image, product.name, product.id);
    const thumbnail2 = htmlComponents.createThumbnailImage(product.image, product.name);
    const thumbnail3 = htmlComponents.createThumbnailImage(product.image, product.name);
    const thumbnail4 = htmlComponents.createThumbnailImage(product.image, product.name);
    const productThumbnailsContainer = htmlComponents.createProductThumbnailsContainer([thumbnail1, thumbnail2, thumbnail3, thumbnail4]);
    const productImageWrapper = htmlComponents.createProductDetailsImageWrapper([productImage, productThumbnailsContainer]);

    // Details Text
    const productTitle = htmlComponents.createProductDetailsTitle(product.name);
    const productDescription = htmlComponents.createProductDetailsDescription(product.description);
    const productPriceSymbol = htmlComponents.createPriceSymbol("€ ");
    const productPrice = htmlComponents.createProductPrice(product.price);
    productPriceSymbol.appendChild(productPrice);
    
    // Size Form
    const sizeInputSmall = htmlComponents.createSizeInput("S");
    const sizeSmallLabel = htmlComponents.createInputLabel("S", sizeInputSmall);
    sizeSmallLabel.setAttribute("for", sizeInputSmall.id)
    const sizeInputSmallContainer = htmlComponents.createSizeInputsContainer([sizeInputSmall, sizeSmallLabel]);

    const sizeInputMedium = htmlComponents.createSizeInput("M");
    const sizeMediumLabel = htmlComponents.createInputLabel("M", sizeInputMedium);
    sizeMediumLabel.setAttribute("for", sizeInputMedium.id)
    const sizeInputMediumContainer = htmlComponents.createSizeInputsContainer([sizeInputMedium, sizeMediumLabel]);

    const sizeInputLarge = htmlComponents.createSizeInput("L");
    const sizeLargeLabel = htmlComponents.createInputLabel("L", sizeInputLarge);
    sizeLargeLabel.setAttribute("for", sizeInputLarge.id)
    const sizeInputLargeContainer = htmlComponents.createSizeInputsContainer([sizeInputLarge, sizeLargeLabel]);

    const sizeInputExtraLarge = htmlComponents.createSizeInput("XL");
    const sizeExtraLargeLabel = htmlComponents.createInputLabel("XL", sizeInputExtraLarge);
    sizeExtraLargeLabel.setAttribute("for", sizeInputExtraLarge.id)
    const sizeInputExtraLargeContainer = htmlComponents.createSizeInputsContainer([sizeInputExtraLarge, sizeExtraLargeLabel]);

    const sizeFormSelect = htmlComponents.createSizeFormSelect([sizeInputSmallContainer, sizeInputMediumContainer, sizeInputLargeContainer, sizeInputExtraLargeContainer]);
    const fieldsetLegend = htmlComponents.createFieldsetLegend("Choose your size");

    const formFieldset = htmlComponents.createSizeFormFieldset([fieldsetLegend, sizeFormSelect]);
    const sizeFormButton = htmlComponents.createsizeFormButton("add to cart");
    const sizeForm = htmlComponents.createProductSizeForm([formFieldset, sizeFormButton]);

    const sizeFormError = htmlComponents.createSizeError();

    const productDetails = htmlComponents.createProductDetails([productTitle, productDescription, productPriceSymbol, sizeForm, sizeFormError]);

    const childitems = [productImageWrapper, productDetails];
    const productDetailsContainer = htmlComponents.createProductDetailsContainer(childitems)

    return productDetailsContainer;
};


// Shoppingbag Page
export function createShoppingBagHtml(item, parentElement) {
    const shoppingbagHtml = createShoppingbagElements(item);
    parentElement.append(shoppingbagHtml);
};

function createShoppingbagElements(item) {

    const shoppingbagItemImage = htmlComponents.createShoppingbagItemImage(item.image, item.name);
    const shoppingbagItemLink = htmlComponents.createShoppingbagItemLink(`productdetails.html?id=${item.id}`, [shoppingbagItemImage]);
    const shoppingbagImageContainer = htmlComponents.createShoppingbagImageContainer([shoppingbagItemLink]);

    const shoppingbagItemPriceSymbol = htmlComponents.createShoppingbagItemPriceSymbol("€ ");
    const shoppingbagItemPrice = htmlComponents.createShoppingbagPrice(item.price);
    shoppingbagItemPriceSymbol.appendChild(shoppingbagItemPrice);
    // const shoppingbagItemRemove = htmlComponents.createShoppingbagItemRemove("Remove item");
    const shoppingbagItemRemove = htmlComponents.createShoppingbagItemRemove("/images/delete-outline-rounded.svg", "delete item");
    const shoppingbagItemPriceContainer = htmlComponents.createShoppingbagPriceContainer([shoppingbagItemPriceSymbol, shoppingbagItemRemove]);

    const shoppingbagItemSize = htmlComponents.createShoppingbagItemSize(item.size);
    const shoppingbagItemTitle = htmlComponents.createShoppingbagItemTitle(item.name);
    const shoppingbagItemInfo = htmlComponents.createShoppingbagItemInfo([shoppingbagItemTitle, shoppingbagItemSize]);
    const shoppingbagItemDetails = htmlComponents.createShoppingbagItemDetails([shoppingbagItemInfo, shoppingbagItemPriceContainer]);
    const shoppingbagItem = htmlComponents.createShoppingbagItem([shoppingbagImageContainer, shoppingbagItemDetails]);

    return shoppingbagItem;
};


// Checkout Validation
export function createCheckoutSuccessHtml(parentElement) {
    const checkoutSuccessHtml = createCheckoutSuccessElements();
    parentElement.append(checkoutSuccessHtml);
};

function createCheckoutSuccessElements() {

    const checkoutSuccessTitle = htmlComponents.createCheckoutSuccessTitle("Thank you for your order");
    const checkoutSuccessText = htmlComponents.createCheckoutSuccessText("You are now one step closer to your next adventure");

    const checkoutSuccessButton = htmlComponents.createCheckoutSuccessActionButton("Continue shopping", "/men.html");
    const checkoutSuccessActionContainer = htmlComponents.createCheckoutSuccessActionContainer([checkoutSuccessButton]);

    const checkoutSuccessContainer = htmlComponents.createCheckoutSuccessContainer([checkoutSuccessTitle, checkoutSuccessText, checkoutSuccessActionContainer]);

    return checkoutSuccessContainer;
};
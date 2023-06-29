/**
 * Clears the HTML of an element
 * @param {*} parentElement The element to clear
 * @example
 * const container = documentquerySelector(".container");
 * clearHtml(container);
 */
export function clearHtml(parentElement) {
  parentElement.innerHTML = "";
}

// Featured Products
/**
 * Creates the HTML for a featured product
 * @param {*} product The product to display
 * @param {*} parentElement The element to append the HTML to
 */
export function createFeaturedProductHtml(product, parentElement) {
  const featuredProduct = document.createElement("div");
  featuredProduct.classList.add("featured__item", "flex");

  const productLink = document.createElement("a");
  productLink.href = `productdetails.html?id=${product.id}`;
  featuredProduct.append(productLink);

  const productImage = document.createElement("img");
  productImage.src = product.images[0].src;
  productImage.alt = product.images[0].alt;
  productLink.append(productImage);

  const productTitle = document.createElement("h3");
  productTitle.innerText = product.name;
  featuredProduct.append(productTitle);

  const button = document.createElement("div");
  featuredProduct.append(button);
  const buttonLink = document.createElement("a");
  buttonLink.classList.add("cta");
  buttonLink.innerText = "view more";
  buttonLink.href = `productdetails.html?id=${product.id}`;
  button.append(buttonLink);

  parentElement.append(featuredProduct);
}

// Subscribe Validation
/**
 * Creates the HTML for the subscribe validation
 * @param {*} parentElement The element to append the HTML to
 * @example
 * const validationContainer = document.querySelector(".validation");
 * createSubscribeValidationHtml(validationContainer);
 */
export function createSubscribeValidationHtml(parentElement) {
  const validationContainer = document.createElement("div");
  validationContainer.classList.add("subscribe-background", "subscribe-success", "flex");

  const validationWrapper = document.createElement("div");
  validationWrapper.classList.add("subscribe__wrapper", "container", "flex");
  validationContainer.append(validationWrapper);

  const validationHeading = document.createElement("h2");
  validationHeading.innerText = "Thank you for following our journey towards great adventures";
  validationWrapper.append(validationHeading);

  const button = document.createElement("div");
  validationWrapper.append(button);
  const buttonLink = document.createElement("a");
  buttonLink.classList.add("cta", "cta-big");
  buttonLink.innerText = "Explore our products";
  buttonLink.href = "men.html";
  button.append(buttonLink);

  parentElement.append(validationContainer);
}

// Products Page
/**
 * Creates the HTML for a product card
 * @param {*} product The product to display
 * @param {*} parentElement The element to append the HTML to
 */
export function createProductCardHtml(product, parentElement) {
  const productLink = document.createElement("a");
  productLink.classList.add("card-link");
  productLink.href = `productdetails.html?id=${product.id}`;

  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productLink.append(productCard);

  const productImage = document.createElement("div");
  productImage.classList.add("card-image");
  productImage.style = `background-image: url(${product.images[0].src})`;
  productCard.append(productImage);

  const productCardDetails = document.createElement("div");
  productCardDetails.classList.add("product-card__details", "flex");
  productCard.append(productCardDetails);

  const productTitle = document.createElement("h2");
  productTitle.innerText = product.name;
  productCardDetails.append(productTitle);

  const productText = document.createElement("p");
  productText.innerText = product.short_description.replace("<p>", "").replace("</p>", "");
  productCardDetails.append(productText);

  // Price
  const priceSymbol = document.createElement("p");
  priceSymbol.classList.add("price");
  priceSymbol.innerText = product.prices.currency_symbol + " ";
  productCardDetails.append(priceSymbol);

  const productPrice = document.createElement("span");
  productPrice.innerText = product.prices.regular_price;
  priceSymbol.append(productPrice);

  if (product.on_sale === true) {
    productPrice.style = `text-decoration: line-through`;

    const priceSymbolOnSale = document.createElement("p");
    priceSymbolOnSale.classList.add("on-sale");
    priceSymbolOnSale.innerText = product.prices.currency_symbol + " ";
    priceSymbol.append(priceSymbolOnSale);
    const onSalePrice = document.createElement("span");
    onSalePrice.innerText = product.prices.sale_price;
    priceSymbolOnSale.append(onSalePrice);
  }

  parentElement.append(productLink);
}

// ProductDetails Page
/**
 * Creates the HTML for a specific product details page
 * @param {*} product The product to display
 * @param {*} parentElement The element to append the HTML to
 */
export function createProductDetailsHtml(product, parentElement) {
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("product__wrapper", "split");

  // Images
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("product-images__wrapper", "flex");
  detailsContainer.append(imageWrapper);
  const productImage = document.createElement("img");
  productImage.classList.add("product-image");
  productImage.src = product.images[0].src;
  productImage.alt = product.images[0].alt;
  imageWrapper.append(productImage);

  // Thumbnails
  const thumbnailsContainer = document.createElement("div");
  thumbnailsContainer.classList.add("product-thumbnails", "flex");
  imageWrapper.append(thumbnailsContainer);

  product.images.forEach((image) => {
    const thumbnail = document.createElement("img");
    thumbnail.classList.add("product-thumbnails__image");
    thumbnail.src = image.src;
    thumbnail.alt = image.alt;
    thumbnailsContainer.append(thumbnail);
  });

  const productDetails = document.createElement("div");
  productDetails.classList.add("product-details", "flex");
  detailsContainer.append(productDetails);

  // Details text
  const productTitle = document.createElement("h1");
  productTitle.innerText = product.name;
  productDetails.append(productTitle);
  const productDescription = document.createElement("p");
  productDescription.classList.add("product-details__description");
  productDescription.innerText = product.description.replace("<p>", "").replace("</p>", "");
  productDetails.append(productDescription);

  // Price
  const priceSymbol = document.createElement("p");
  priceSymbol.classList.add("price");
  priceSymbol.innerText = product.prices.currency_symbol + " ";
  productDetails.append(priceSymbol);
  const productPrice = document.createElement("span");
  productPrice.innerText = product.prices.regular_price;
  priceSymbol.append(productPrice);

  if (product.on_sale === true) {
    productPrice.style = `text-decoration: line-through`;

    const priceSymbolOnSale = document.createElement("p");
    priceSymbolOnSale.classList.add("on-sale");
    priceSymbolOnSale.innerText = product.prices.currency_symbol + " ";
    priceSymbol.append(priceSymbolOnSale);
    const onSalePrice = document.createElement("span");
    onSalePrice.innerText = product.prices.sale_price;
    priceSymbolOnSale.append(onSalePrice);
  }

  // Size Form
  const sizeForm = document.createElement("form");
  sizeForm.classList.add("size-form", "flex");
  sizeForm.id = "size-form";
  productDetails.append(sizeForm);

  const formFieldset = document.createElement("fieldset");
  sizeForm.append(formFieldset);
  const fieldsetLegend = document.createElement("legend");
  fieldsetLegend.classList.add("visually-hidden");
  formFieldset.append(fieldsetLegend);
  const sizeFormSelect = document.createElement("div");
  sizeFormSelect.classList.add("size-form__select", "flex");
  formFieldset.append(sizeFormSelect);

  product.variations.forEach((variation) => {
    const sizeContainer = document.createElement("div");
    sizeContainer.classList.add("size", "flex");
    sizeFormSelect.append(sizeContainer);
    const sizeInput = document.createElement("input");
    sizeInput.id = variation.id;
    sizeInput.value = variation.attributes[0].value;
    sizeInput.type = "radio";
    sizeInput.name = variation.attributes[0].name;
    sizeContainer.append(sizeInput);
    const sizeLabel = document.createElement("label");
    sizeLabel.innerText = sizeInput.value;
    sizeLabel.setAttribute("for", variation.id);
    sizeContainer.append(sizeLabel);
  });

  const sizeFormError = document.createElement("div");
  sizeFormError.classList.add("size-form-validation");
  productDetails.append(sizeFormError);

  const formButton = document.createElement("button");
  formButton.classList.add("cta");
  formButton.innerText = "add to cart";
  sizeForm.append(formButton);

  document.title = `RainyDays | Products | ${product.name}`;
  parentElement.append(detailsContainer);
}

// Image Modal
/**
 * Creates the HTML for an image modal for a product
 * @param {*} product The product to create the modal for
 * @param {*} parentElement The element to append the HTML to
 */
export function createImageModalHtml(product, parentElement) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("modal-image");
  const imageModal = document.createElement("img");
  imageModal.src = product.images[0].src;
  imageModal.alt = product.images[0].alt;
  imageContainer.append(imageModal);

  parentElement.append(imageContainer);
}

// ShoppingCart
/**
 * Creates the HTML for an item to display in the shopping cart
 * @param {*} item The item to display
 * @param {*} parentElement The element to append the HTML to
 */
export function createShoppingCartHtml(item, parentElement) {
  const cartItem = document.createElement("div");
  cartItem.classList.add("shoppingcart-item", "flex");

  // Image
  const itemImageContainer = document.createElement("div");
  itemImageContainer.classList.add("shoppingcart-item__image");
  cartItem.append(itemImageContainer);
  const itemLink = document.createElement("a");
  itemLink.href = `productdetails.html?id=${item.id}`;
  itemImageContainer.append(itemLink);
  const itemImage = document.createElement("img");
  itemImage.classList.add("product__image");
  itemImage.src = item.image;
  itemImage.alt = item.imageAlt;
  itemLink.append(itemImage);

  // Details
  const itemDetails = document.createElement("div");
  itemDetails.classList.add("shoppingcart-details", "flex");
  cartItem.append(itemDetails);
  const itemInfo = document.createElement("div");
  itemInfo.classList.add("shoppingcart-item__info", "flex");
  itemDetails.append(itemInfo);
  const itemTitle = document.createElement("h2");
  itemTitle.innerText = item.name;
  itemInfo.append(itemTitle);
  const itemSize = document.createElement("p");
  itemSize.innerText = item.size;
  itemInfo.append(itemSize);

  // Price
  const itemPriceContainer = document.createElement("div");
  itemPriceContainer.classList.add("shoppingcart-item__price", "flex");
  itemDetails.append(itemPriceContainer);
  const priceSymbol = document.createElement("p");
  priceSymbol.innerText = "€ ";
  itemPriceContainer.append(priceSymbol);
  const itemPrice = document.createElement("span");
  itemPrice.innerText = item.price;
  priceSymbol.append(itemPrice);

  if (item.onSalePrice) {
    itemPrice.style = `text-decoration: line-through`;

    const priceSymbolOnSale = document.createElement("p");
    priceSymbolOnSale.style = "color: darkred";
    priceSymbolOnSale.innerText = "€ ";
    priceSymbol.append(priceSymbolOnSale);
    const onSalePrice = document.createElement("span");
    onSalePrice.innerText = item.onSalePrice;
    priceSymbolOnSale.append(onSalePrice);
  }

  const itemRemove = document.createElement("img");
  itemRemove.classList.add("remove-item", "link");
  itemRemove.src = "/images/delete-outline-rounded.svg";
  itemRemove.alt = "delete item";
  itemPriceContainer.append(itemRemove);

  parentElement.append(cartItem);
}

// Checkout Validation
/**
 * Creates the HTML for the checkout success validation
 * @param {*} parentElement The element to append the HTML to
 */
export function createCheckoutSuccessHtml(parentElement) {
  const successContainer = document.createElement("section");
  successContainer.classList.add("checkout-success", "flex");

  const successTitle = document.createElement("h1");
  successTitle.innerText = "Thank you for your order";
  successContainer.append(successTitle);

  const successText = document.createElement("p");
  successText.innerText = "You are now one step closer to your next adventure";
  successContainer.append(successText);

  const button = document.createElement("div");
  button.classList.add("checkout-success__action");
  successContainer.append(button);
  const buttonLink = document.createElement("a");
  buttonLink.classList.add("cta", "cta-big");
  buttonLink.innerText = "Continue shopping";
  buttonLink.href = "/men.html";
  button.append(buttonLink);

  document.title = "RainyDays | Checkout Success";
  parentElement.append(successContainer);
}

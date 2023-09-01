/**
 * Creates HTML and displays a message
 * @param {*} parentElement The element to append the message to
 * @param {string} messageType The CSS class for the message
 * @param {string} messageText The message to display
 * @example
 * const messageContainer = document.querySelector(".message");
 *
 * createMessage(messageContainer, "error", "There was an error loading this product");
 */
export function createMessage(parentElement, messageType, messageText) {
  const message = document.createElement("div");
  message.classList.add(messageType);
  message.innerText = messageText;

  parentElement.append(message);
}

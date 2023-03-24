export function createMessage(parentElement, messageType, messageText) {
    const message = document.createElement("div");
    message.classList.add(messageType);
    message.innerText = messageText;

    return parentElement.append(message)
};
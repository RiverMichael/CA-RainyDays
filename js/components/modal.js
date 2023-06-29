/**
 * Opens a modal
 * @param {*} modalContainer The content of the modal
 * @param {*} modalOverlay The overlay behind the modal
 * @example
 * const modalContent = document.querySelector(".modal-content");
 * const modalOverlay = document.querySelector(".modal-overlay");
 * const button = document.querySelector("button");
 *
 * button.addEventListener("click", () => openModal(modalContent, modalOverlay));
 */
export function openModal(modalContainer, modalOverlay) {
  modalContainer.style.display = "block";
  modalOverlay.style.display = "block";
}

/**
 * Closes a modal
 * @param {*} modalContainer The content of the modal
 * @param {*} modalOverlay The overlay behind the modal
 * @example
 * const modalContent = document.querySelector(".modal-content");
 * const modalOverlay = document.querySelector(".modal-overlay");
 *
 * modalOverlay.addEventListener("click", () => closeModal(modalContent, modalOverlay));
 */
export function closeModal(modalContainer, modalOverlay) {
  modalContainer.style.display = "none";
  modalOverlay.style.display = "none";
}

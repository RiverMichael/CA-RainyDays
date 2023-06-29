const hamburgerMenu = document.querySelector("#hamburger");

hamburgerMenu.addEventListener("click", toggleNavigation);

/**
 * Toggles the display of the navigation menu
 */
function toggleNavigation() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("display-nav");
}

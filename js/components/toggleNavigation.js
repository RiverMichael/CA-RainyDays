const hamburgerMenu = document.querySelector("#hamburger");

hamburgerMenu.addEventListener("click", toggleNavigation);

function toggleNavigation() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("display-nav");
};

"use strict";

// ========= MOBILE MENU =========
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuButton = document.querySelector(".mobile-menu-btn");
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

const closeMenuButton = document.querySelector(".close-menu-btn");
closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});

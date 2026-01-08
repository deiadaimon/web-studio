"use strict";

// ========= MOBILE MENU =========
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuButton = document.querySelector(".mobile-menu-btn");
mobileMenuButton.onclick = function () {
  mobileMenu.classList.add("is-open");
};

const closeMenuButton = document.querySelector(".close-menu-btn");
closeMenuButton.onclick = function () {
  mobileMenu.classList.remove("is-open");
};

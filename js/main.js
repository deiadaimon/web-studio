"use strict";

// ============ MODAL ============
const backdrop = document.querySelector(".backdrop");
const heroButton = document.querySelector(".hero-btn");
heroButton.onclick = function () {
    backdrop.classList.remove("is-hidden");
};

const closeModalButton = document.querySelector(".close-modal-btn");
closeModalButton.onclick = function () {
    backdrop.classList.add("is-hidden");
};

// ============ MOBILE MENU ============
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuButton = document.querySelector(".mobile-menu-btn");
mobileMenuButton.onclick = function () {
    mobileMenu.classList.add("is-open");
};

const closeMenuButton = document.querySelector(".close-menu-btn");
closeMenuButton.onclick = function () {
    mobileMenu.classList.remove("is-open");
};

// selectionne les éléments  //

const menuHamburger = document.querySelector(".image-menu-burger");
const croixFermeture = document.querySelector(".image-croix-menu");
const navLinks = document.querySelector(".nav-links");

// Ajoute un écouteur d'événement 'click' sur l'icône du menu burger
// Lorsque l'utilisateur clique, la classe 'menu-mobile' est ajoutée à l'élément 'nav-links'
menuHamburger.addEventListener("click", () => {
  navLinks.classList.add("menu-mobile");
});

croixFermeture.addEventListener("click", () => {
  navLinks.classList.remove("menu-mobile");
});

document.querySelector(".image-menu-burger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.add("open");
});

document.querySelector(".image-croix-menu").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("open");
});

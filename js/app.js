// Sélectionne les éléments de la navigation pour le menu mobile
const menuHamburger = document.querySelector(".image-menu-burger");
const croixFermeture = document.querySelector(".image-croix-menu");
const navLinks = document.querySelector(".nav-links");

// Écouteurs d'événements pour ouvrir et fermer le menu mobile

// Lorsque l'utilisateur clique sur l'icône du menu burger
// la classe 'menu-mobile' est ajoutée pour ouvrir le menu
menuHamburger.addEventListener("click", () => {
  navLinks.classList.add("menu-mobile");
  navLinks.classList.add("open");  // Ajoute 'open' pour les animations spécifiques si nécessaire
});

// Lorsque l'utilisateur clique sur l'icône de fermeture (croix),
// la classe 'menu-mobile' est retirée pour fermer le menu
croixFermeture.addEventListener("click", () => {
  navLinks.classList.remove("menu-mobile");
  navLinks.classList.remove("open"); // Supprime 'open' pour arrêter les animations
});





// Sélection de l'élément de chargement
const chargement = document.querySelector('.chargement');

// Ajoute un effet de fondu-out (disparition en fondu) après le chargement de la page
window.addEventListener('load', () => {
  chargement.classList.add('fondu-out'); // Ajoute la classe CSS pour animer le fondu-out
});

// Retarde l'affichage de la page principale jusqu'à 3 secondes après le chargement
setTimeout(() => {
  chargement.style.display = 'none'; // Cache l'écran de chargement
  document.querySelector('.container-index').style.display = 'block'; // Affiche le contenu principal de la page
}, 0);
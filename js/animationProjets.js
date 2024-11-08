// ANIMATION AFFICHAGE LIBRAIRIE PAGE ACCUEIL https://gsap.com///

const logo = document.querySelector('.logo');
const accueil = document.querySelector('.page-en-cour1');
const h2 = document.querySelector('h2');
const cartes = document.querySelectorAll('.carte');
const allItems = document.querySelectorAll('li');


const TL1 = new TimelineMax({paused: true});


const mediaQuery = window.matchMedia("(max-width: 1024px)");

// Fonction pour ajuster les animations selon la taille de l'écran
function handleScreenChange(e) {
    if (e.matches) {
        TL1
        .from(accueil, 2, {y: -30, opacity: 0},)
        .from(h2, 2, { x: -900, opacity: 0},'-=2')
        .staggerFrom(cartes, 2, {x: 1000, opacity: 0}, 0.60, '-=2')
        TL1.play();
       
    } else {
        TL1
        .from(logo, 1.7, {y: -150, opacity: 0}, )
        .from(accueil, 1.7, { y: 150, opacity: 0},'-=1.7')
        .from(h2, 3, {  opacity: 0},'-=1')
        .staggerFrom(cartes, 2, {x: 1000, opacity: 0}, 0.20, '-=2.5')
        .staggerFrom(allItems, 1, {y: -100, opacity: 0}, 0.20, '-=1.8')
        TL1.play();
        
    }
}

// Écouteur d'événement pour surveiller les changements de taille d'écran
mediaQuery.addEventListener("change", handleScreenChange);

// Initialisation de l'animation lors du chargement de la page
handleScreenChange(mediaQuery);
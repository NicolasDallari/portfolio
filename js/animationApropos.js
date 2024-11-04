// ANIMATION AFFICHAGE LIBRAIRIE PAGE ACCUEIL https://gsap.com///

const logo = document.querySelector('.logo');
const accueil = document.querySelector('.page-en-cour');
const quiH2 = document.querySelector('.quiH2');
const quiP = document.querySelector('.quiP');
const pourquoiH2 = document.querySelector('.pourquoiH2');
const pourquoiP = document.querySelector('.pourquoiP');
const parcourH2 = document.querySelector('.parcourH2');
const parcourP = document.querySelector('.parcourP');
const imageProfil = document.querySelector('.image-photo-moi');
const allItems = document.querySelectorAll('li');


const TL1 = new TimelineMax({paused: true});


const mediaQuery = window.matchMedia("(max-width: 1024px)");

// Fonction pour ajuster les animations selon la taille de l'écran
function handleScreenChange(e) {
    if (e.matches) {
        TL1
        .from(accueil, 3, {y: -30, opacity: 0},)
        .from(quiH2, 2, {x: -40, opacity: 0},'-=2.5')
        .from(imageProfil, 2, {x: 50, opacity: 0},'-=2.3')
        .from(quiP, 2, {x: 40, opacity: 0},'-=2')
        .from(pourquoiH2, 2, {x:-40, opacity: 0},'-=2')
        .from(pourquoiP, 2, {x: 40, opacity: 0},'-=2')
        .from(parcourH2, 2, {x:-40, opacity: 0},'-=2')
        .from(parcourP, 2, {x: 40, opacity: 0},'-=2')
        TL1.play();
       
    } else {
        TL1
        .from(logo, 1.7, {y: -150, opacity: 0}, )
        .from(accueil, 1.7, {y: 150, opacity: 0},'-=1.7')
        .from(quiH2, 1.5, {y: -40, opacity: 0},'-=1.4')
        .from(quiP, 1.5, {y: -40, opacity: 0},'-=1.2')
        .from(imageProfil, 3, {x: 80, opacity: 0},'-=1.5')
        .from(pourquoiH2, 1.5, {y:-40, opacity: 0},'-=2.7')
        .from(pourquoiP, 1.5, {y: -40, opacity: 0},'-=2.4')
        .from(parcourH2, 1.5, {y:-40, opacity: 0},'-=2.2')
        .from(parcourP, 1.5, {y: -40, opacity: 0},'-=2')
        .staggerFrom(allItems, 1, {y: -100, opacity: 0}, 0.20, '-=1.8')
        TL1.play();
        
    }
}

// Écouteur d'événement pour surveiller les changements de taille d'écran
mediaQuery.addEventListener("change", handleScreenChange);

// Initialisation de l'animation lors du chargement de la page
handleScreenChange(mediaQuery);
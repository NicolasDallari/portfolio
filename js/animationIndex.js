                    // ANIMATION AFFICHAGE LIBRAIRIE PAGE ACCUEIL https://gsap.com///

const logo = document.querySelector('.logo');
const accueil = document.querySelector('.page-en-cour');
const hello = document.querySelector('.Hello');
const bienvenue = document.querySelector('.Bienvenue');
const nomPrénom = document.querySelector('.NomPrénom');
const métier = document.querySelector('.Métier');
const imageFond = document.querySelector('.image-fond');
const allItems = document.querySelectorAll('li');


const TL1 = new TimelineMax({paused: true});


const mediaQuery = window.matchMedia("(max-width: 1024px)");

// Fonction pour ajuster les animations selon la taille de l'écran
function handleScreenChange(e) {
    if (e.matches) {
        TL1
        .from(accueil, 3, {y: -30, opacity: 0}, )
        .from(hello, 2.5, {x: -70,y: -70, opacity: 0},'-=2.5')
        .from(bienvenue, 2.4, {y: 70,x: 70, opacity: 0},'-=2.4')
        .from(nomPrénom, 2.3, {x: 70,y: -70, opacity: 0},'-=2.3')
        .from(métier, 2.2, {y: 70,x: -70, opacity: 0},'-=2.2')
        .from(imageFond, 2.1, {y: 50, opacity: 0},'-=2.1')
        TL1.play();
       
    } else {
        TL1
        .from(logo, 1.7, {y: -150, opacity: 0}, )
        .from(accueil, 1.7, {y: 150, opacity: 0},'-=1.7')
        .from(hello, 1.5, {x: -70, opacity: 0},'-=1.1')
        .from(bienvenue, 1.5, {x: 70, opacity: 0}, '-=1')
        .from(nomPrénom, 1.5, {x: -70, opacity: 0}, '-=0.9')
        .from(métier, 1.5, {x: 70, opacity: 0}, '-=0.8')
        .from(imageFond, 3,{y: 80, opacity: 0}, '-=3')
        .staggerFrom(allItems, 1, {y: -100, opacity: 0}, 0.20,'-=1.8')
        TL1.play();
    }
}

// Écouteur d'événement pour surveiller les changements de taille d'écran
mediaQuery.addEventListener("change", handleScreenChange);

// Initialisation de l'animation lors du chargement de la page
handleScreenChange(mediaQuery);
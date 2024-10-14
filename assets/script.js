// script.js
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
// Déclaration de variables globales
const imageban = document.querySelector('.banner-img');
const flechegauche = document.querySelector('.arrow_left');
const flechedroite = document.querySelector('.arrow_right');
const points = document.querySelectorAll('.dot');
let slidedefaut = 0;

function miseajourcarrousel(slide) {
    // Mise à jour de l'image
    const cheminImage = `assets/images/slideshow/${slides[slide].image}`;
    imageban.src = cheminImage;
    imageban.alt = `Slide ${slide + 1}`;

    // Mise à jour du texte
    const tagLine = slides[slide].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log(`Clic sur la flèche`);
}

function miseajourpoints(slide) {
    points.forEach((dot, i) => {
        if (i === slide) {
            dot.classList.add('dot_selected'); // On ajoute la classe correspondante au point sélectionné
        } else {
            dot.classList.remove('dot_selected'); // On supprime la classe correspondante au point sélectionné
        }
    });
}

// Fonction pour gérer la mise à jour de l'index du slide
function changerSlide(direction) {
    if (direction === 'left') {
        slidedefaut = (slidedefaut - 1 + slides.length) % slides.length; // Boucle à gauche
    } else if (direction === 'right') {
        slidedefaut = (slidedefaut + 1) % slides.length; // Boucle à droite
    }

    miseajourcarrousel(slidedefaut);
    miseajourpoints(slidedefaut);
}

// Ecouteur d'évènement flèche gauche
flechegauche.addEventListener('click', function () {
    changerSlide('left');
});

// Ecouteur d'évènement flèche droite
flechedroite.addEventListener('click', function () {
    changerSlide('right');
});

// Initialisation du carrousel
miseajourcarrousel(slidedefaut);
miseajourpoints(slidedefaut);

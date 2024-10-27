// Konstante elementer / elementer som ikke endrer seg, henter style fra CSS
const carousel = document.querySelector('.carousel, .FKCarousel');
const items = document.querySelectorAll('.carousel-item, .FKCarousel-item');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');


// Variabel, CurrentIndex = 0 betyr første element i karusellen
let currentIndex = 1;
const itemWidth = items[0].clientWidth; // Bredden på et element

// Funskjon som flytter karusell
function updateCarouselPosition() {
    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`; 
    //Karusellen flyttes horisontalt (X = X-aksen) basert på aktiv side, formelen beregner hvor langt karusellen skal flytte seg
}

// Funksjon som får karusellen til å starte på bilde nr. 2
window.addEventListener('load', () => {
    updateCarouselPosition();  // Oppdater posisjon på bilde
});

// Flytt til neste side ved klikk
nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {      // Koden hindrer karusellen for å gå over det siste bilde
        currentIndex++;                         // Koden gjør at karusellen flytter seg et bilde frem ved klikk
        updateCarouselPosition();               // Funskjonen som endrer karusellen
    }
});

// Flytt til forrige side
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {                 // Koden forhindrer funskjonen i å gå forbi første bilde
        currentIndex--;                     // Koden presiserer at funskjonen skal flytte et bilde tilbake
        updateCarouselPosition();           // Funskjonen som endrer karusellen
    }
});


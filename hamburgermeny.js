// Konstante elementer / elementer som ikke endrer seg, henter style fra CSS
const Hamburgermeny = document.querySelector ('.Hamburgermeny');
const NavigasjonsbarOverlay = document.querySelector ('.NavigasjonsbarOverlay');
const CloseButton = document.querySelector('.close-btn');


// Åpner overlay når hamburgermenyen blir trykket på
Hamburgermeny.addEventListener('click', () => {
    NavigasjonsbarOverlay.classList.add('active');  // Viser overlay ved bruk av 'active' class
    Hamburgermeny.classList.add('active');          // Indikerer at hamburgermenyen er aktiv
});

// Lukker overlay når X blir trykket på
CloseButton.addEventListener('click', () => {
    NavigasjonsbarOverlay.classList.remove('active'); // Gjemmer overlay ved å fjerne 'active' class
    Hamburgermeny.classList.remove('active');         // Resetter hamburgermenyens aktiv
});

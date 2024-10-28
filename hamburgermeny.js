const Hamburgermeny = document.querySelector ('.Hamburgermeny');
const NavigasjonsbarOverlay = document.querySelector ('.NavigasjonsbarOverlay');
const CloseButton = document.querySelector('.close-btn');


// Open overlay when hamburger menu is clicked
Hamburgermeny.addEventListener('click', () => {
    NavigasjonsbarOverlay.classList.add('active');  // Show overlay by adding 'active' class
    Hamburgermeny.classList.add('active');          // Indicate that hamburger menu is active
});

// Close overlay when close button is clicked
CloseButton.addEventListener('click', () => {
    NavigasjonsbarOverlay.classList.remove('active'); // Hide overlay by removing 'active' class
    Hamburgermeny.classList.remove('active');         // Reset hamburger menu state
});

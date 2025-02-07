// Toggle Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Accordion Functionality (Mobile and Desktop)
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling; // Get the next sibling (accordion content)
        const isOpen = content.style.display === 'block';

        // Close all accordions
        accordionHeaders.forEach(h => {
            h.nextElementSibling.style.display = 'none';
        });

        // Toggle the clicked accordion
        content.style.display = isOpen ? 'none' : 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Target the 'fecha' div
    var fechaDiv = document.querySelector('.fecha');
    // Target the 'fecha-numero' img
    var fechaNumeroImg = document.querySelector('.fecha-numero');

    // Function to hide both elements
    function hideElements() {
        fechaDiv.style.display = 'none';
        fechaNumeroImg.style.display = 'none';
    }

    // Add click event listener to the 'fecha' div
    if(fechaDiv) {
        fechaDiv.addEventListener('click', hideElements);
    }

    // Add click event listener to the 'fecha-numero' img
    if(fechaNumeroImg) {
        fechaNumeroImg.addEventListener('click', hideElements);
    }
});
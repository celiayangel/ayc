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
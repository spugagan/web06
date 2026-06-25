document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobilní menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // 2. Plynulé scrollování pro interní odkazy
    const scrollLinks = document.querySelectorAll('.scroll-link');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Kontrola, zda jsme na index.html (pokud odkaz začíná #)
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Zavřít mobilní menu po kliknutí
                    navLinks.classList.remove('show');
                    
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // -70px kvůli fixní hlavičce
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
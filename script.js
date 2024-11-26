// script.js
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block'; // Mostra o botão
        } else {
            backToTopButton.style.display = 'none'; // Oculta o botão
        }
    });
});

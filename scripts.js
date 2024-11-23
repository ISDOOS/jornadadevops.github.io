document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');  // Seleciona todos os cards

    cards.forEach(card => {
        const imageWrapper = card.querySelector('.image-wrapper');
        const overlay = card.querySelector('.overlay');

        imageWrapper.addEventListener('mouseover', function() {
            overlay.style.display = 'flex';
        });

        imageWrapper.addEventListener('mouseout', function() {
            overlay.style.display = 'none';
        });
    });
});

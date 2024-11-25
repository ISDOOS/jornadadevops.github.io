// Exibe um alerta quando o botão for clicado
document.getElementById('alert-button').addEventListener('click', () => {
    alert('Você clicou no botão!');
});

// Adiciona destaque no menu ao rolar a página
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

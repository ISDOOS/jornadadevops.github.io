// Função para mostrar o botão "Voltar ao topo" quando o usuário rolar para baixo
window.onscroll = function() {
    let backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Função para rolar até o topo quando o botão for clicado
document.getElementById("back-to-top").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

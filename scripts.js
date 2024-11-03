// Função para abrir o modal
function openModal(title, imgSrc, description, repoLink) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = imgSrc;
    document.getElementById('modal-description').innerText = description;

    // Atualiza o link do repositório no modal
    const repoLinkElement = document.getElementById('modal-repo-link');
    repoLinkElement.href = repoLink; // Atualiza o link do repositório
    repoLinkElement.innerText = "Ver no GitHub"; // Texto do link

    document.getElementById('modal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Controle para mostrar/ocultar a lista de páginas
document.getElementById('toggle-list').addEventListener('click', function() {
    var list = document.getElementById('page-list');
    var overlay = document.getElementById('overlay');
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'flex'; // Usar flexbox para centralizar o conteúdo
        overlay.style.display = 'block'; // Exibir o fundo escurecido
    } else {
        list.style.display = 'none';
        overlay.style.display = 'none'; // Ocultar o fundo escurecido
    }
});

// Fecha a lista e o overlay ao clicar fora do card ou no overlay
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    const list = document.getElementById('page-list');
    const overlay = document.getElementById('overlay');

    // Fecha o modal se clicar fora dele
    if (event.target == modal) {
        closeModal();
    }

    // Fecha a lista se clicar no overlay
    if (event.target == overlay) {
        list.style.display = 'none';
        overlay.style.display = 'none'; // Ocultar o fundo escurecido
    }
};

// Fecha a lista ao clicar no botão de fechar
document.getElementById('close-list').addEventListener('click', function() {
    var list = document.getElementById('page-list');
    var overlay = document.getElementById('overlay');
    list.style.display = 'none';
    overlay.style.display = 'none'; // Ocultar o fundo escurecido
});

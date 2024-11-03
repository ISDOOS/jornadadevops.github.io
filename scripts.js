// Função para abrir o modal
function openModal(title, imgSrc, description, repoLink) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = imgSrc;
    document.getElementById('modal-description').innerText = description;
    // Adiciona o link do repositório no modal
    document.getElementById('modal-repo-link').innerHTML = `<a href="${repoLink}" target="_blank">Ver Repositório</a>`;
    document.getElementById('modal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fecha o modal quando o usuário clica fora do conteúdo do modal
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
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

// Fecha a lista e o overlay ao clicar fora do card
window.onclick = function(event) {
    const list = document.getElementById('page-list');
    const overlay = document.getElementById('overlay');
    if (event.target == overlay) {
        list.style.display = 'none';
        overlay.style.display = 'none'; // Ocultar o fundo escurecido
    }
}

// Fecha a lista quando o botão de fechar é clicado
document.getElementById('close-list').addEventListener('click', function() {
    var list = document.getElementById('page-list');
    var overlay = document.getElementById('overlay');
    list.style.display = 'none';
    overlay.style.display = 'none'; // Ocultar o fundo escurecido
});

// Função para abrir o modal
function openModal(title, imgSrc, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = imgSrc;
    document.getElementById('modal-description').innerText = description;
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
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
});

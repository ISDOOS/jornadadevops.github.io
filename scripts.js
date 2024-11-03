function filterProjects() {
    const input = document.getElementById('filterInput');
    const filter = input.value.toLowerCase();
    const projectContainer = document.getElementById('projectContainer');
    const projects = projectContainer.getElementsByClassName('project-card');

    for (let i = 0; i < projects.length; i++) {
        const projectTitle = projects[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (projectTitle.includes(filter)) {
            projects[i].style.display = ""; // Exibe o projeto
        } else {
            projects[i].style.display = "none"; // Oculta o projeto
        }
    }
}

function openModal(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

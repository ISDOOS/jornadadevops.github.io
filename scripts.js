document.getElementById("toggle-list").addEventListener("click", function() {
    document.getElementById("page-list").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("close-list").addEventListener("click", function() {
    document.getElementById("page-list").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

document.getElementById("overlay").addEventListener("click", function() {
    document.getElementById("page-list").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

function openModal(title, imageUrl, description, repoLink) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-image").src = imageUrl;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-repo-link").href = repoLink;

    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

document.querySelector(".close").addEventListener("click", closeModal);

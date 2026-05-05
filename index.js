function openProject(imgSrc) {
    const modal = document.getElementById("project-modal");
    const modalImg = document.getElementById("modal-img");

    modal.style.display = "flex";
    modalImg.src = imgSrc;
}

function closeProject() {
    document.getElementById("project-modal").style.display = "none";
}

// optional: click outside image to close
document.addEventListener("click", function (e) {
    const modal = document.getElementById("project-modal");
    const modalImg = document.getElementById("modal-img");

    if (e.target === modal) {
        modal.style.display = "none";
    }
});

/* Función para mostrar y ocultar las respuestas de las preguntas frecuentes*/
function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
/*Función para abrir el modal*/
function openModal(img) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

/* Función para cerrar el modal*/
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}


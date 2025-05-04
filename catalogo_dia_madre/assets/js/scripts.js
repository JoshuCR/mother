
// Puedes agregar scripts aquí si deseas interactividad extra
console.log("Catálogo cargado con éxito.");

function ampliarImagen(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("img-ampliada");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

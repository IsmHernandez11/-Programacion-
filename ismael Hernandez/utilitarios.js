// Recupera texto de un input
function recuperarTexto(id) {
    return document.getElementById(id).value.trim();
}

// Recupera número
function recuperarNumero(id) {
    return Number(document.getElementById(id).value);
}

// Mostrar error
function mostrarError(id, mensaje) {
    document.getElementById(id).innerText = mensaje;
}

// Limpiar errores
function limpiarErrores() {
    mostrarError("errorNombre", "");
    mostrarError("errorEdad", "");
}
function obtenerAleatorio() {
    return Math.floor(Math.random() * 3) + 1;
}

function generarElemento() {
    let numero = obtenerAleatorio();
    if (numero === 1) return "piedra";
    if (numero === 2) return "papel";
    return "tijera";
}

function determinarGanador(eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 === eleccionJugador2) return 0;

    if (
        (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") ||
        (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") ||
        (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel")
    ) {
        return 1;
    }

    return 2;
}

function generarRuta(nombre) {
    return "imagenes/" + nombre + ".png";
}

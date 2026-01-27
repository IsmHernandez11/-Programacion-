let puntosUsuario = 0;
let puntosComputador = 0;

function jugar(seleccionado) {
    let eleccionComputador = generarElemento();
    let ruta = generarRuta(eleccionComputador);

    document.getElementById("imgComputador").src = ruta;

    let resultado = determinarGanador(seleccionado, eleccionComputador);
    let mensaje = "";

    if (resultado === 0) {
        mensaje = "EMPATE";
    } else if (resultado === 1) {
        puntosUsuario++;
        mensaje = "GANASTE LA PARTIDA";
    } else {
        puntosComputador++;
        mensaje = "PERDISTE LA PARTIDA";
    }

    document.getElementById("resultado").innerText = mensaje;
    document.getElementById("puntosUsuario").innerText = puntosUsuario;
    document.getElementById("puntosComputador").innerText = puntosComputador;

    if (puntosUsuario === 5) {
        alert("HAS GANADO EL JUEGO");
    }

    if (puntosComputador === 5) {
        alert("EL COMPUTADOR TE HA VENCIDO");
    }
}

function limpiar() {
    puntosUsuario = 0;
    puntosComputador = 0;
    document.getElementById("puntosUsuario").innerText = 0;
    document.getElementById("puntosComputador").innerText = 0;
    document.getElementById("resultado").innerText = "";
    document.getElementById("imgComputador").src = "";
}

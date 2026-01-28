//No se olvide de respirar, mantenga la calma y demuestre lo que sabe 
let palabraSecreta = "";
let intentosFallidos = 0;
let letrasCorrectas = 0;


function esMayuscula(caracter) {
    let ascii = caracter.charCodeAt(0);
    return ascii >= 65 && ascii <= 90;
}


function guardarPalabra() {
    let palabra = recuperarTexto("txtSecreta");

    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras MAYÚSCULAS");
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        if (!esMayuscula(palabra.charAt(i))) {
            alert("Debe ingresar solo letras MAYÚSCULAS");
            return;
        }
    }

    palabraSecreta = palabra;
    intentosFallidos = 0;
    letrasCorrectas = 0;

    for (let i = 0; i < 5; i++) {
        mostrarTexto("div" + i, "_");
    }

    mostrarTexto("resultado", "");
    document.getElementById("btnReiniciar").style.display = "none";
    mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
}


function mostrarLetra(letra, posicion) {
    mostrarTexto("div" + posicion, letra);
}

function validarLetra() {
    let letra = recuperarTexto("txtLetra");

    if (letra.length !== 1 || !esMayuscula(letra)) {
        alert("Ingrese una sola letra MAYÚSCULA");
        return;
    }

    let encontrada = false;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta.charAt(i) === letra) {
            if (document.getElementById("div" + i).innerText === "_") {
                mostrarLetra(letra, i);
                letrasCorrectas++;
            }
            encontrada = true;
        }
    }
    if (!encontrada) {
        intentosFallidos++;
        mostrarImagen("ahorcadoImagen", "Ahorcado_0" + (intentosFallidos + 1) + ".png");

        if (intentosFallidos === 9) {
            mostrarImagen("ahorcadoImagen", "gameOver.gif");
            mostrarTexto("resultado", "PERDEDOR ❌");
            document.getElementById("btnReiniciar").style.display = "block";
            return;
        }
    }
    if (letrasCorrectas === palabraSecreta.length) {
        mostrarImagen("ahorcadoImagen", "ganador.gif");
        mostrarTexto("resultado", "GANADOR 🎉");
        document.getElementById("btnReiniciar").style.display = "block";
    }

    mostrarTextoEnCaja("txtLetra", "");
}


function reiniciarJuego() {
    palabraSecreta = "";
    intentosFallidos = 0;
    letrasCorrectas = 0;

    mostrarTextoEnCaja("txtSecreta", "");
    mostrarTextoEnCaja("txtLetra", "");
    mostrarTexto("resultado", "");
    mostrarImagen("ahorcadoImagen", "");

    for (let i = 0; i < 5; i++) {
        mostrarTexto("div" + i, "_");
    }

    document.getElementById("btnReiniciar").style.display = "none";
}
//gracias casi me pego un tiro
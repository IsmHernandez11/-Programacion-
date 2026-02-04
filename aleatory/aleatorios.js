function generarNumeroAleatorio() {
    let numero = Math.floor(Math.random() * 100) + 1;
    return numero;
}

function generarAleatorios() {

    let aleatorios = [];
    let cantidad = recuperarInt("txtCantidad");

    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        alert("Ingrese un número válido entre 5 y 20");
        return;
    }

    // For desde 0
    for (let i = 0; i < cantidad; i++) {
        console.log(i);

        // Generar número aleatorio y agregar al arreglo
        let numero = generarNumeroAleatorio();
        aleatorios.push(numero);
    }

    // resultado
    mostrarResultados(aleatorios);
}

function mostrarResultados(arregloNumeros) {

    let html = "<table border='1'>";
    html += "<tr><th>Índice</th><th>Número</th></tr>";

    for (let i = 0; i < arregloNumeros.length; i++) {
        html += "<tr>";
        html += "<td>" + i + "</td>";
        html += "<td>" + arregloNumeros[i] + "</td>";
        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("resultado").innerHTML = html;
}
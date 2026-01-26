calcularPromedioNotas = function () {

    let n1;
    let n2;
    let n3;
    let promedio;

    n1 = recuperarFlotante("txtNota1");
    n2 = recuperarFlotante("txtNota2");
    n3 = recuperarFlotante("txtNota3");

    promedio = calcularPromedio(n1, n2, n3);

    promedio = promedio.toFixed(2);

    cambiarTexto("lblResultado", promedio);

    if (promedio >= 7) {
        cambiarImagen("imgResultado", "exito.gif");
    } else {
        cambiarImagen("imgResultado", "fracaso.gif");
    }
}
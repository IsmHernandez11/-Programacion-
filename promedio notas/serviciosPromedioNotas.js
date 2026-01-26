//actualizacion de datos
function calcularPromedioNotas(n1, n2, n3) {
    let promedio = (n1 + n2 + n3) / 3;
    console.log("Promedio:", promedio);

    if (promedio > 0 && promedio < 5) {
        console.log("REPROBADO");
        
    } 
    else if (promedio >= 5 && promedio <= 8) {
        console.log("BUEN TRABAJO");
        
    } 
    else if (promedio > 8 && promedio <= 10) {
        console.log("EXCELENTE");
        
    } 
    else {
        console.log("DATOS INCORRECTOS");
        
    }
}
jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara();
   
}
mostrarCara = function(numero){
    if(numero == 1){ // con == se compara, mientras que con = se asigna
        cambiarImagen("imgDado","dados1.png");
    } 
    else if(numero == 2){
        cambiarImagen("imgDado","dados2.png");
    } 
    else if(numero == 3){
        cambiarImagen("imgDado","dados3.png");
    } 
    else if(numero == 4){
        cambiarImagen("imgDado","dados4.png");
    } 
    else if(numero == 5){
        cambiarImagen("imgDado","dados5.png");
    } 
    else if(numero == 6){
        cambiarImagen("imgDado","dados6.png");
    }
}



lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}
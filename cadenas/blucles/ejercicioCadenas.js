ejecutarPrueba=function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function(cadena){
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log ("Caracter "+caracter+" posicion "+posicion);
    }

    for(let posicion=0;posicion<=cadena.length-1;posicion){
        caracter=cadena.charAt(posicion);
        console.log ("Caracter "+caracter+" posicion "+posicion);
    }
}

invertirCadena = function(cadena){
    let resultado = "";

    for(let posicion = cadena.length - 1; posicion >= 0; posicion--){
        let letra = cadena.charAt(posicion);
        resultado = resultado + letra;
    }

    return resultado;
}

ejecutarPrueba2 = function(){
    let texto = recuperarTexto("txtCadena");
    let cadenaInvertida = invertirCadena(texto);
    mostrarTexto("lblResultado", cadenaInvertida);
}

buscarLetra=function(cadena,letra){
    let letraIterada;
    let existeLetra = false;
    for(let i=0;i<cadena.lenght;i++){
        letraIterada = cadena.charAt(i);
        if(letraIterada==letra){
            existeLetra=true;
        }
    }
    if(existeLetra==true){
        console.log ("Existe");
        return true;
    }else{
        console.log("No Existe");
        return false;
    }
}

contarMayusculas = function (cadena){
    let letra;
    let contadoorMayusculas = 0;
    for(let i=0;i<cadena.lenght;i++){
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            contadoorMayusculas++;
        }
    }
    console.log(contadoorMayusculas);
}
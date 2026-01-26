saludar=function(){
    let nombre;
    nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido")
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");
    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);
    mostrarImagen("imgSaludo","./imagenes/panda.png");
    mostrarTextoEnCaja("txtNombre","");
}
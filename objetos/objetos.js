function crearProducto() {

    
    let producto1 = {
        nombre: "Laptop",
        precio: 850.50,
        stock: 10
    };


    let producto2 = {
        nombre: "Mouse",
        precio: 25.99,
        stock: 15
    };

  
    console.log("Nombre producto 1: " + producto1.nombre);

  
    console.log("Precio producto 2: " + producto2.precio);

 
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto2.stock > producto1.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}

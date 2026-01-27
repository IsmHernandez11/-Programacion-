function calcularDescuentoPorVolumen(subtotal, cantidad) {
    let descuento = 0;

    if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * 0.03;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = subtotal * 0.04;
    } else if (cantidad >= 12) {
        descuento = subtotal * 0.05;
    }

    return descuento;
}
function esProductoValido(producto) {
    return producto !== "" && producto.length <= 10;
}

function esCantidadValida(cantidad) {
    return Number.isInteger(cantidad) && cantidad >= 1 && cantidad <= 100;
}

function esPrecioValido(precio) {
    return !isNaN(precio) && precio >= 0 && precio <= 50;
}
function calcularDescuento() {
    const producto = document.getElementById("txtProducto").value.trim();
    const cantidad = parseInt(document.getElementById("txtCantidad").value);
    const precio = parseFloat(document.getElementById("txtPrecio").value);

    if (!esProductoValido(producto)) {
        alert("El nombre del producto es obligatorio y máximo 10 caracteres");
        return;
    }

    if (!esCantidadValida(cantidad)) {
        alert("La cantidad debe ser un número entre 1 y 100");
        return;
    }

    if (!esPrecioValido(precio)) {
        alert("El precio debe ser un número entre 0 y 50");
        return;
    }

    const subtotal = cantidad * precio;
    const descuento = calcularDescuentoPorVolumen(subtotal, cantidad);

    document.getElementById("lblSubtotal").innerText = subtotal.toFixed(2);
    document.getElementById("lblDescuento").innerText = descuento.toFixed(2);
    document.getElementById("lblTotal").innerText = (subtotal - descuento).toFixed(2);
}
function puntoDeVenta() {
    calcularDescuento();
}
//listoddd
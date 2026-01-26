// ===============================
// serviciosPuntoDeVenta.js


// Calcula el valor del descuento
// monto: valor sin descuento
// porcentajeDescuento: porcentaje a aplicar
function calcularValorDescuento(monto, porcentajeDescuento) {
    return monto * (porcentajeDescuento / 100);
}

// Calcula el valor del IVA (12%)
// monto: precio sin IVA
function calcularIVA(monto) {
    return monto * 0.12;
}

// Calcula el subtotal
// precio: precio unitario del producto
// cantidad: cantidad comprada
function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

// Calcula el total a pagar
// subtotal: valor total sin descuentos
// descuento: valor del descuento (NO porcentaje)
// iva: valor del IVA
function calcularTotal(subtotal, descuento, iva) {
    return subtotal - descuento + iva;
}

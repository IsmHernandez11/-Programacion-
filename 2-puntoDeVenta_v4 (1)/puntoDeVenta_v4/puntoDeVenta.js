// ******** FUNCIONES ********

// Calcula el subtotal
function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

// Calcula el valor del descuento
function calcularValorDescuento(subtotal, porcentaje) {
    return subtotal * (porcentaje / 100);
}

// Calcula el IVA (12%)
function calcularIVA(valor) {
    return valor * 0.12;
}

// Calcula el valor total a pagar
function calcularValorTotal(subtotal, descuento, iva) {
    return subtotal - descuento + iva;
}

// Función principal
function calcularVenta() {

    // Recuperar valores de las cajas de texto
    let precioProducto = parseFloat(document.getElementById("txtPrecioProducto").value);
    let cantidad = parseInt(document.getElementById("txtCantidad").value);
    let descuento = parseInt(document.getElementById("txtDescuento").value);

    // Calcular subtotal
    let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    document.getElementById("lblSubtotal").innerText = valorSubtotal.toFixed(2);

    // Calcular descuento
    let valorDescuento = calcularValorDescuento(valorSubtotal, descuento);
    document.getElementById("lblDescuento").innerText = valorDescuento.toFixed(2);

    // Calcular IVA
    let valorIVA = calcularIVA(valorSubtotal - valorDescuento);
    document.getElementById("lblIVA").innerText = valorIVA.toFixed(2);

    // Calcular total
    let valorTotal = calcularValorTotal(valorSubtotal, valorDescuento, valorIVA);
    document.getElementById("lblTotal").innerText = valorTotal.toFixed(2);

    // Mostrar resumen
    document.getElementById("lblResumen").innerText =
        `Valor a pagar por ${cantidad} producto(s) con ${descuento}% de descuento: USD ${valorTotal.toFixed(2)}`;
}

// Limpiar campos
function limpiar() {
    document.getElementById("txtPrecioProducto").value = "";
    document.getElementById("txtCantidad").value = "";
    document.getElementById("txtDescuento").value = "";

    document.getElementById("lblSubtotal").innerText = "0.0";
    document.getElementById("lblDescuento").innerText = "0.0";
    document.getElementById("lblIVA").innerText = "0.0";
    document.getElementById("lblTotal").innerText = "0.0";
    document.getElementById("lblResumen").innerText = "";
}

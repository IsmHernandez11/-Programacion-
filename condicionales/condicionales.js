// 1️ calcularSalarioNetohh
function calcularSalarioNeto(ingresoAnual) {
    let descuento = 0;

    if (ingresoAnual < 5000) {
        descuento = 0;
    } else if (ingresoAnual >= 5000 && ingresoAnual < 8000) {
        descuento = ingresoAnual * 0.05;
    } else if (ingresoAnual >= 8000 && ingresoAnual < 12000) {
        descuento = ingresoAnual * 0.10;
    } else if (ingresoAnual >= 12000 && ingresoAnual < 20000) {
        descuento = ingresoAnual * 0.15;
    } else {
        descuento = ingresoAnual * 0.20;
    }

    return ingresoAnual - descuento;
}

// 2️ calcularCapacidadPago
function calcularCapacidadPago(edad, ingresos, egresos) {
    let capacidad = ingresos * 0.30;
    let disponible = ingresos - egresos;

    if (edad >= 18 && edad <= 65 && disponible >= capacidad) {
        return capacidad;
    } else {
        return 0;
    }
}

// 3️ calcularDescuento
function calcularDescuento(precio, cantidad) {
    let total = precio * cantidad;
    let descuento = 0;

    if (cantidad >= 3 && cantidad <= 5) {
        descuento = total * 0.05;
    } else if (cantidad >= 6 && cantidad <= 10) {
        descuento = total * 0.10;
    } else if (cantidad > 10) {
        descuento = total * 0.15;
    }

    return total - descuento;
}

// 4️ determinarColesterolLDL
function determinarColesterolLDL(nivelColesterol) {
    if (nivelColesterol < 100) {
        return "Óptimo";
    } else if (nivelColesterol >= 100 && nivelColesterol < 130) {
        return "Casi óptimo";
    } else if (nivelColesterol >= 130 && nivelColesterol < 160) {
        return "Alto";
    } else {
        return "Muy alto";
    }
}

// 5️ validarClave
function validarClave(clave) {
    if (clave.length >= 8) {
        return true;
    } else {
        return false;
    }
}

// 6️ esMayuscula
function esMayuscula(caracter) {
    let codigo = caracter.charCodeAt(0);
    return codigo >= 65 && codigo <= 90;
}

// 7️ esMinuscula
function esMinuscula(caracter) {
    let codigo = caracter.charCodeAt(0);
    return codigo >= 97 && codigo <= 122;
}

// 8️ esDigito
function esDigito(caracter) {
    let codigo = caracter.charCodeAt(0);
    return codigo >= 48 && codigo <= 57;
}

// 9️ darPermiso
function darPermiso(notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica >= 8 && notaFisica >= 9 && notaGeometria >= 8) {
        return true;
    } else {
        return false;
    }
}

//  otorgarPermiso
function otorgarPermiso(notaMatematica, notaFisica) {
    if (notaMatematica >= 8 && notaFisica >= 9) {
        return true;
    } else {
        return false;
    }
}

// 1 dejarSalir
function dejarSalir(notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica >= 8 && notaFisica >= 9 && notaGeometria >= 8) {
        return true;
    } else {
        return false;
    }
}
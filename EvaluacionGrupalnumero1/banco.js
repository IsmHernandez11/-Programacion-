let cuentas = [];
let movimientos = [];
let cuentaActual = null;

agregarCuenta = function(){

    let cedula = recuperarTexto("cedula");
    let nombre = recuperarTexto("nombre");
    let apellido = recuperarTexto("apellido");
    let numeroCuenta = recuperarTexto("numeroCuenta");

    let existe = cuentas.find(c => c.numeroCuenta === numeroCuenta);

    if(existe){
        alert("Cuenta duplicada");
        return;
    }

    let nuevaCuenta = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        numeroCuenta: numeroCuenta,
        saldo: 0
    };

    cuentas.push(nuevaCuenta);

    mostrarCuentas();
}


mostrarCuentas = function(){

    let tabla = document.getElementById("tablaCuentas");
    if(!tabla) return;

    tabla.innerHTML = `
        <tr>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Número Cuenta</th>
            <th>Saldo</th>
        </tr>
    `;

    for(let i = 0; i < cuentas.length; i++){
        tabla.innerHTML += `
            <tr>
                <td>${cuentas[i].cedula}</td>
                <td>${cuentas[i].nombre}</td>
                <td>${cuentas[i].apellido}</td>
                <td>${cuentas[i].numeroCuenta}</td>
                <td>${cuentas[i].saldo}</td>
            </tr>
        `;
    }
}


//======= TRANSACCIONES =======

buscarCuenta = function(){

    let numero = recuperarTexto("buscarCuenta");

    cuentaActual = cuentas.find(c => c.numeroCuenta === numero);

    if(!cuentaActual){
        mostrarTexto("mensaje", "CUENTA INEXISTENTE");
        return;
    }

    mostrarTexto("mensaje", "Cuenta encontrada. Saldo: " + cuentaActual.saldo);

    document.getElementById("btnDepositar").disabled = false;
    document.getElementById("btnRetirar").disabled = false;
}

depositar = function(){

    let monto = recuperarFloat("monto");

    cuentaActual.saldo += monto;

    movimientos.push({
        cuenta: cuentaActual.numeroCuenta,
        monto: monto,
        operacion: "DEPOSITO"
    });

    mostrarTexto("mensaje", "Depósito realizado");
}

retirar = function(){

    let monto = recuperarFloat("monto");

    if(cuentaActual.saldo < monto){
        mostrarTexto("mensaje", "Saldo insuficiente");
        return;
    }

    cuentaActual.saldo -= monto;

    movimientos.push({
        cuenta: cuentaActual.numeroCuenta,
        monto: monto,
        operacion: "RETIRO"
    });

    mostrarTexto("mensaje", "Retiro realizado");
}

//======= MOVIMIENTOS =======

verMovimientos = function(){

    let numero = recuperarTexto("verCuenta");

    let movimientosCuenta = [];

    for(let i = 0; i < movimientos.length; i++){
        if(movimientos[i].cuenta === numero){
            movimientosCuenta.push(movimientos[i]);
        }
    }

    let tabla = document.getElementById("tablaMovimientos");
    tabla.innerHTML = "";

    for(let i = 0; i < movimientosCuenta.length; i++){
        tabla.innerHTML += `
            <tr>
                <td>${movimientosCuenta[i].cuenta}</td>
                <td>${movimientosCuenta[i].monto}</td>
                <td>${movimientosCuenta[i].operacion}</td>
            </tr>
        `;
    }
}
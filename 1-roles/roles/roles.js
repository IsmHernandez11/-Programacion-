
let empleados = [
    { cedula: "1714616123", nombre: "JOHN", apellido: "CENA", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "LUISA", apellido: "GONZALEZ", sueldo: 900.0 },
    { cedula: "1102345678", nombre: "ALEXANDRA", apellido: "MORENO", sueldo: 800.0 }
];

let roles = [];

mostrarEmpleados = function () {
    let divTabla = document.getElementById("tablaEmpleados");

    let contenido = "<table border='1'>";
    contenido += "<tr>";
    contenido += "<th>CEDULA</th>";
    contenido += "<th>NOMBRE</th>";
    contenido += "<th>APELLIDO</th>";
    contenido += "<th>SUELDO</th>";
    contenido += "</tr>";

    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];
        contenido += "<tr>";
        contenido += "<td>" + emp.cedula + "</td>";
        contenido += "<td>" + emp.nombre + "</td>";
        contenido += "<td>" + emp.apellido + "</td>";
        contenido += "<td>" + emp.sueldo + "</td>";
        contenido += "</tr>";
    }

    contenido += "</table>";
    divTabla.innerHTML = contenido;
}

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");

    deshabilitarFormularioEmpleado();
    mostrarEmpleados();
}


mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");

    deshabilitarComponente("btnGuardarRol");
}



mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");

    mostrarRoles();
    mostrarTotales();
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");

    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");

    esNuevo = true;
}

buscarEmpleado = function (cedula) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === cedula) {
            return empleados[i];
        }
    }
    return null;
}

agregarEmpleado = function (empleado) {
    let existe = buscarEmpleado(empleado.cedula);
    if (existe == null) {
        empleados.push(empleado);
        return true;
    }
    return false;
}

guardar = function () {

    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldoTxt = recuperarTexto("txtSueldo");
    let sueldo = parseFloat(sueldoTxt);

    let valido = true;

    // Limpiar los errores
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");

    // validaciones para cedula, nombre, apelliod y sueldo 
    if (cedula.length !== 10 || isNaN(cedula)) {
        mostrarTexto("lblErrorCedula", "Cédula inválida debe tener 10 caractéres");
        valido = false;
    }
    if (nombre.length < 3 || nombre !== nombre.toUpperCase()) {
        mostrarTexto("lblErrorNombre", "Nombre inválido, debe ir todo en mayúsculas");
        valido = false;
    }
    if (apellido.length < 3 || apellido !== apellido.toUpperCase()) {
        mostrarTexto("lblErrorApellido", "Apellido inválido, debe ir todo en mayúsculas");
        valido = false;
    }
    if (isNaN(sueldo) || sueldo < 400 || sueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "Sueldo inválido min $400, máx 5000");
        valido = false;
    }

    if (!valido) {
        return;
    }
    if (esNuevo) {

        let emp = {};
        emp.cedula = cedula;
        emp.nombre = nombre;
        emp.apellido = apellido;
        emp.sueldo = sueldo;

        let resultado = agregarEmpleado(emp);

        if (resultado) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarFormularioEmpleado();
            esNuevo = false;
        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + cedula);
        }
    }
    else {

        let emp = buscarEmpleado(cedula);

        if (emp != null) {
            emp.nombre = nombre;
            emp.apellido = apellido;
            emp.sueldo = sueldo;

            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
            deshabilitarFormularioEmpleado();
            esNuevo = false;
        }
    }
}

ejecutarBusqueda = function () {
    let cedula = recuperarTexto("txtBusquedaCedula");
    let emp = buscarEmpleado(cedula);

    if (emp == null) {
        alert("EMPLEADO NO EXISTE");
        return;
    }

    mostrarTextoEnCaja("txtCedula", emp.cedula);
    mostrarTextoEnCaja("txtNombre", emp.nombre);
    mostrarTextoEnCaja("txtApellido", emp.apellido);
    mostrarTextoEnCaja("txtSueldo", emp.sueldo);

    deshabilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");

    esNuevo = false;
}


deshabilitarFormularioEmpleado = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

limpiar = function () {
    //cajas de texto
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");

    esNuevo = false;
    deshabilitarFormularioEmpleado();
}


//buscar rol =)

buscarPorRol = function () {

    // limpiar datos anteriores
    mostrarTexto("infoCedula", "");
    mostrarTexto("infoNombre", "");
    mostrarTexto("infoSueldo", "");
    mostrarTexto("infoIESS", "0.0");
    mostrarTexto("infoPago", "0.0");

    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let emp = buscarEmpleado(cedula);

    if (emp == null) {
        alert("EMPLEADO NO EXISTE");
        return;
    }

    mostrarTexto("infoCedula", emp.cedula);
    mostrarTexto("infoNombre", emp.nombre + " " + emp.apellido);
    mostrarTexto("infoSueldo", emp.sueldo);
}

calcularAporteEmpleado = function (sueldo) {
    return sueldo * 0.0945;
}

calcularValorAPagar = function (sueldo, aporte, descuento) {
    return sueldo - aporte - descuento;
}

calcularRol = function () {
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");

    if (isNaN(descuento) || descuento < 0 || descuento > sueldo) {
        alert("DESCUENTO INVALIDO");
        return;
    }

    let aporte = calcularAporteEmpleado(sueldo);
    let total = calcularValorAPagar(sueldo, aporte, descuento);

    mostrarTexto("infoIESS", aporte.toFixed(2));
    mostrarTexto("infoPago", total.toFixed(2));
    habilitarComponente("btnGuardarRol");

}

buscarRol = function (cedula) {
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].cedula === cedula) {
            return roles[i];
        }
    }
    return null;
}

agregarRol = function (rol) {
    let existe = buscarRol(rol.cedula);
    if (existe != null) {
        alert("YA EXISTE UN ROL PARA ESTA CÉDULA");
        return;
    }

    roles.push(rol);
    alert("ROL GUARDADO CORRECTAMENTE");
}

calcularAporteEmpleador = function (sueldo) {
    return sueldo * 0.1115;
}

guardarRol = function () {
    let cedula = recuperarTextoDiv("infoCedula");
    let nombre = recuperarTextoDiv("infoNombre");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let valorPagar = recuperarFloatDiv("infoPago");
    let aporteEmpleado = recuperarFloatDiv("infoIESS");

    let aporteEmpleador = calcularAporteEmpleador(sueldo);

    let rol = {};
    rol.cedula = cedula;
    rol.nombre = nombre;
    rol.sueldo = sueldo;
    rol.valorAPagar = valorPagar;
    rol.aporteEmpleado = aporteEmpleado;
    rol.aporteEmpleador = aporteEmpleador;

    agregarRol(rol);

    deshabilitarComponente("btnGuardarRol");

    console.log(roles); // para verificar que se guardan
}

mostrarRoles = function () {
    let divTabla = document.getElementById("tablaResumen");

    let contenido = "<table border='1'>";
    contenido += "<tr>";
    contenido += "<th>CEDULA</th>";
    contenido += "<th>NOMBRE</th>";
    contenido += "<th>VALOR A PAGAR</th>";
    contenido += "<th>APORTE EMPLEADO</th>";
    contenido += "<th>APORTE EMPLEADOR</th>";
    contenido += "</tr>";

    for (let i = 0; i < roles.length; i++) {
        let rol = roles[i];
        contenido += "<tr>";
        contenido += "<td>" + rol.cedula + "</td>";
        contenido += "<td>" + rol.nombre + "</td>";
        contenido += "<td>" + rol.valorAPagar.toFixed(2) + "</td>";
        contenido += "<td>" + rol.aporteEmpleado.toFixed(2) + "</td>";
        contenido += "<td>" + rol.aporteEmpleador.toFixed(2) + "</td>";
        contenido += "</tr>";
    }

    contenido += "</table>";
    divTabla.innerHTML = contenido;
}

mostrarTotales = function () {

    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;

    for (let i = 0; i < roles.length; i++) {
        let rol = roles[i];
        totalEmpleado += rol.aporteEmpleado;
        totalEmpleador += rol.aporteEmpleador;
        totalAPagar += rol.valorAPagar;
    }

    let totalNomina = totalEmpleado + totalEmpleador + totalAPagar;

    mostrarTexto("infoAporteEmpleado", totalEmpleado.toFixed(2));
    mostrarTexto("infoAporteEmpresa", totalEmpleador.toFixed(2));
    mostrarTexto("infoTotalPago", totalAPagar.toFixed(2));

    mostrarTexto("infoTotalNomina", totalNomina.toFixed(2));
}




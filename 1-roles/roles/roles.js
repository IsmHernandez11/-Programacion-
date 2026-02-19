let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]
let roles = [];
//ya esta lista =)
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


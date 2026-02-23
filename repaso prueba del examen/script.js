let estudiantes = [];

// MOSTRAR LISTA
function mostrarLista() {
    let tabla = document.getElementById("lista");
    tabla.innerHTML = "";

    for (let i = 0; i < estudiantes.length; i++) {
        tabla.innerHTML += `
        <tr>
            <td>${estudiantes[i].id}</td>
            <td>${estudiantes[i].nombre}</td>
            <td>${estudiantes[i].correo}</td>
        </tr>`;
    }
}

// LIMPIAR FORMULARIO
function limpiarFormulario() {
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";

    document.getElementById("errorId").innerHTML = "";
    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorCorreo").innerHTML = "";
}

function validar(id, nombre, correo) {
    let valido = true;

    if (id === "" || isNaN(id)) {
        document.getElementById("errorId").innerHTML =
            "El ID es obligatorio y debe tener solo números.";
        valido = false;
    } else {
        document.getElementById("errorId").innerHTML = "";
    }

    let regexNombre = /^[A-Z][a-zA-Z ]*$/;

    if (nombre === "") {
        document.getElementById("errorNombre").innerHTML =
            "El nombre es obligatorio.";
        valido = false;
    } else if (!regexNombre.test(nombre)) {
        document.getElementById("errorNombre").innerHTML =
            "Debe iniciar con mayúscula y contener solo letras.";
        valido = false;
    } else {
        document.getElementById("errorNombre").innerHTML = "";
    }

    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "") {
        document.getElementById("errorCorreo").innerHTML =
            "Ingrese un correo válido.";
        valido = false;
    } else if (!regexCorreo.test(correo)) {
        document.getElementById("errorCorreo").innerHTML =
            "Ingrese un correo válido.";
        valido = false;
    } else {
        document.getElementById("errorCorreo").innerHTML = "";
    }

    return valido;
}

function guardar() {
    let id = document.getElementById("id").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();

    if (!validar(id, nombre, correo)) return;

    let index = estudiantes.findIndex(e => e.id === id);

    if (index !== -1) {
        estudiantes[index].nombre = nombre;
        estudiantes[index].correo = correo;
        alert("Estudiante actualizado correctamente.");
    } else {
        estudiantes.push({ id, nombre, correo });
        alert("Estudiante agregado correctamente.");
    }

    mostrarLista();
    limpiarFormulario();
}
function eliminar() {
    let idEliminar = document.getElementById("idEliminar").value.trim();

    if (idEliminar === "") {
        document.getElementById("errorEliminar").innerHTML =
            "Ingresa un ID para eliminar.";
        return;
    }

    let index = estudiantes.findIndex(e => e.id === idEliminar);

    if (index === -1) {
        document.getElementById("errorEliminar").innerHTML =
            "No se encontró un estudiante con ese ID.";
    } else {
        estudiantes.splice(index, 1);
        document.getElementById("errorEliminar").innerHTML = "";
        alert("Estudiante eliminado correctamente.");
        mostrarLista();
    }
}
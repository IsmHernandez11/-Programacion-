// ARREGLO DE PERSONAS
let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 }
];

// AGREGAR PERSONA
function agregarPersona() {
    limpiarErrores();

    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarNumero("txtEdad");
    let valido = true;

    if (nombre.length < 3) {
        mostrarError("errorNombre", "El nombre debe tener al menos 3 caracteres");
        valido = false;
    }

    if (!Number.isInteger(edad) || edad < 0 || edad > 100) {
        mostrarError("errorEdad", "Edad inválida (0 a 100)");
        valido = false;
    }

    if (!valido) return;

    let nuevaPersona = {
        nombre: nombre,
        edad: edad
    };

    personas.push(nuevaPersona);
    alert("PERSONA AGREGADA CORRECTAMENTE");

    mostrarTabla();
}

// MOSTRAR TABLA
function mostrarTabla() {
    let tbody = document.querySelector("#tablaPersonas tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < personas.length; i++) {
        let fila = `
            <tr>
                <td>${personas[i].edad}</td>
                <td>${personas[i].nombre}</td>
            </tr>
        `;
        tbody.innerHTML += fila;
    }
}

// ENCONTRAR MAYOR
function encontrarMayor() {
    let personaMayor = personas[0];
    let elementoPersona;

    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
        }
    }

    return personaMayor;
}

function determinarMayor() {
    let mayor = encontrarMayor();
    document.getElementById("resultadoMayor").innerText =
        `Mayor: ${mayor.nombre} - Edad: ${mayor.edad}`;
}

// ENCONTRAR MENOR
function encontrarMenor() {
    let personaMenor = personas[0];
    let elementoPersona;

    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;
        }
    }

    return personaMenor;
}

function determinarMenor() {
    let menor = encontrarMenor();
    document.getElementById("resultadoMenor").innerText =
        `Menor: ${menor.nombre} - Edad: ${menor.edad}`;
}
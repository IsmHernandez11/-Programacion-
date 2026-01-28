function validarPassword(password) {
    let errores = "";

    // Longitud mínima
    if (password.length < 8) {
        errores += "Debe tener al menos 8 caracteres.<br>";
    }

    // Longitud máxima
    if (password.length > 16) {
        errores += "Debe tener máximo 16 caracteres.<br>";
    }

    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneEspecial = false;

    for (let i = 0; i < password.length; i++) {
        let caracter = password.charAt(i);

        if (caracter >= 'A' && caracter <= 'Z') {
            tieneMayuscula = true;
        }

        if (caracter >= '0' && caracter <= '9') {
            tieneDigito = true;
        }

        if (caracter === '*' || caracter === '-' || caracter === '_') {
            tieneEspecial = true;
        }
    }

    if (!tieneMayuscula) {
        errores += "Debe contener al menos una letra mayúscula.<br>";
    }

    if (!tieneDigito) {
        errores += "Debe contener al menos un dígito.<br>";
    }

    if (!tieneEspecial) {
        errores += "Debe contener al menos un carácter especial (*, -, _).<br>";
    }

    return errores;
}

function ejecutarValidacion() {
    let password = document.getElementById("txtPassword").value;
    let mensaje = validarPassword(password);

    let resultado = document.getElementById("resultado");

    if (mensaje === "") {
        resultado.innerHTML = "Password Correcto";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = mensaje;
        resultado.style.color = "red";
    }
}
function validarPlaca() {
  const placa = document.getElementById("txtPlaca").value.toUpperCase();
  const lblResultado = document.getElementById("lblResultado");
  const lblProvincia = document.getElementById("lblProvincia");
  const lblTipo = document.getElementById("lblTipo");
  const lblDia = document.getElementById("lblDia");

  if (!validarEstructura(placa)) {
    lblResultado.textContent = "PLACA INCORRECTA";
    lblProvincia.textContent = "";
    lblTipo.textContent = "";
    lblDia.textContent = "";
    return;
  }

  lblResultado.textContent = "PLACA VÁLIDA";
  lblProvincia.textContent = obtenerProvincia(placa);
  lblTipo.textContent = obtenerTipoVehiculo(placa);
  lblDia.textContent = obtenerDiaCirculacion(placa);
}

function obtenerProvincia(placa) {
  const letra = placa[0];

  switch (letra) {
    case 'A': return "Azuay";
    case 'B': return "Bolívar";
    case 'C': return "Carchi";
    case 'G': return "Guayas";
    case 'P': return "Pichincha";
    case 'M': return "Manabí";
    case 'R': return "Los Ríos";
    default: return "No pertenece a ninguna provincia";
  }
}

function obtenerTipoVehiculo(placa) {
  const letra = placa[1];

  if (letra === 'A') return "Vehículo comercial";
  if (letra === 'U') return "Vehículo particular";
  if (letra === 'Z') return "Vehículo gubernamental";

  return "Tipo desconocido";
}

function obtenerDiaCirculacion(placa) {
  const ultimoDigito = placa[7];

  if (ultimoDigito === '1' || ultimoDigito === '2') return "Lunes";
  if (ultimoDigito === '3' || ultimoDigito === '4') return "Martes";
  if (ultimoDigito === '5' || ultimoDigito === '6') return "Miércoles";
  if (ultimoDigito === '7' || ultimoDigito === '8') return "Jueves";
  if (ultimoDigito === '9' || ultimoDigito === '0') return "Viernes";
}
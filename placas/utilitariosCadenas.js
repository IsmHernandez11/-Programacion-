// Convierte una cadena a mayúsculas
function convertirMayusculas(cadena) {
  return cadena.toUpperCase();
}

// Elimina espacios en blanco al inicio y al final
function limpiarEspacios(cadena) {
  return cadena.trim();
}

// Verifica si una cadena está vacía
function esCadenaVacia(cadena) {
  return cadena.length === 0;
}

// Limpia y convierte a mayúsculas (útil para placas)
function normalizarCadena(cadena) {
  return convertirMayusculas(limpiarEspacios(cadena));
}
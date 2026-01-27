function validarEstructura(placa) {
  if (placa.length !== 8) return false;

  // Letras (no vocales)
  for (let i = 0; i < 3; i++) {
    if (!esMayuscula(placa[i]) || esVocal(placa[i])) {
      return false;
    }
  }

  // Guion
  if (placa[3] !== '-') return false;

  // Números
  for (let i = 4; i < 8; i++) {
    if (!esDigito(placa[i])) return false;
  }

  return true;
}
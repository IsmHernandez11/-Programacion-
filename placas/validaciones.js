function esMayuscula(caracter) {
  return caracter === caracter.toUpperCase() && /^[A-Z]$/.test(caracter);
}

function esDigito(caracter) {
  return /^[0-9]$/.test(caracter);
}

function esVocal(caracter) {
  return /^[AEIOU]$/.test(caracter);
}

// diferencia de años:
export const diferenciaYear = (year) => {
  return new Date().getFullYear() - year;
}

// cálculo segun tipo de seguro:
export const calcularSeguro = (seguro) => {
  let incremento;

  switch (seguro) {
    case "civil":
      incremento = 1.05;
      break;
    case "terceros":
      incremento = 1.15;
      break;
    case "todo riesgo":
      incremento = 1.30;
      break;
    default:
      break;
  }
  return incremento;
}


//calculo segun tipo de vehiculo: 
export const calcularVehiculo = (vehiculo) => {
  return (vehiculo === "moto") ? 1.20 : 1.50;
}

//estilo capitalize del texto:
export const capitalize = (texto) => {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
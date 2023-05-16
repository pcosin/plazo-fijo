function calcularPlazoFijo() {
  const monto = parseFloat(document.querySelector("#monto").value);
  const tasaDeInteres = parseFloat(document.querySelector("#tasaDeInteres").value);
  const dias = parseFloat(document.querySelector("#dias").value);

  if (isNaN(monto) || isNaN(tasaDeInteres) || isNaN(dias)) {
    return;
  }

  const interes = calcularInteres(monto, tasaDeInteres, dias);
  const montoFinal = calcularMontoFinal(monto, interes);

  document.querySelector("#intereses").innerHTML = `Intereses = ${interes.toFixed(2)}`;
  document.querySelector("#montoFinal").innerHTML = `Monto Final = ${montoFinal.toFixed(2)}`;
}

function calcularInteres(monto, tasaDeInteres, dias) {
  const tasaDiaria = tasaDeInteres / 365;
  return monto * (tasaDiaria / 100) * dias;
}

function calcularMontoFinal(monto, interes) {
  return monto + interes;
}

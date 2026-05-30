const saldoInicial = 500000;
let saldo = saldoInicial;
let continuar = true;

while (continuar) {

    let retiro = parseInt(prompt(
        "Tu saldo actual es: $" + saldo +
        "\n¿Cuánto dinero deseas retirar?"
    ));

    if (retiro <= saldo && retiro > 0) {

        saldo = saldo - retiro;

        alert("Retiro exitoso.\nNuevo saldo: $" + saldo);

    } else {

        alert("Error: fondos insuficientes o valor inválido.");
    }

    let respuesta = prompt("¿Deseas realizar otro retiro? (si/no)");

    // Validación para evitar errores
    if (respuesta === null || respuesta.toLowerCase() !== "si") {
        continuar = false;
    }
}

alert("Gracias por usar el cajero automático.");

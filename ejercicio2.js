// Variable para controlar si el usuario quiere continuar
let continuar = true;

// Ciclo que se repetirá mientras continuar sea true
while (continuar) {

    // Pedir un número al usuario
    let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar"));

    // Mostrar la tabla del 1 al 12
    for (let i = 1; i <= 12; i++) {

        let resultado = numero * i;

        alert(numero + " x " + i + " = " + resultado);

    }

    // Preguntar si desea consultar otra tabla
    let respuesta = prompt("¿Deseas consultar otra tabla? (si/no)");

    // CONDICIONAL:
    // Si la respuesta es diferente de "si",
    // el programa terminará el ciclo
    if (respuesta.toLowerCase() !== "si") {

        continuar = false;

    }

}

// Mensaje final
alert("Programa finalizado");


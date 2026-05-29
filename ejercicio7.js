// Ejercicio 7 – Contador de pares e impares

// Variables para contar números pares e impares
let pares = 0;
let impares = 0;

// Ciclo que se repite 10 veces
for (let i = 1; i <= 10; i++) {

    // Pedimos un número al usuario
    let numero = parseInt(prompt("Ingrese el número " + i));

    // Condicional:
    // Se usa para verificar si el número es par o impar.
    // Un número es par cuando el residuo de dividirlo entre 2 es igual a 0.
    if (numero % 2 === 0) {

        // Este bloque se ejecuta si el número es par
        pares++;

    } else {

        // Este bloque se ejecuta si el número es impar
        impares++;
    }
}

// Mostramos los resultados finales
alert("Cantidad de números pares: " + pares);
alert("Cantidad de números impares: " + impares);

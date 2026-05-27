// Programa que muestra los números primos del 1 al 50

// Ciclo que recorre los números del 1 al 50
for (let numero = 1; numero <= 50; numero++) {

    // Variable para saber si el número es primo
    let esPrimo = true;

    // CONDICIONAL:
    // Si el número es menor o igual a 1, no es primo
    if (numero <= 1) {

        esPrimo = false;

    } else {

        // Ciclo para revisar divisores del número
        for (let i = 2; i < numero; i++) {

            // CONDICIONAL:
            // Si el residuo de la división es 0,
            // significa que el número tiene divisor
            // y por eso NO es primo
            if (numero % i === 0) {

                esPrimo = false;

            }

        }
    }

    // CONDICIONAL:
    // Si esPrimo sigue siendo true,
    // entonces el número sí es primo
    if (esPrimo) {

        alert("Número primo: " + numero);

    }

}
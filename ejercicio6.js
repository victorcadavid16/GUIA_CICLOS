// Ejercicio 6 – Juego del adivinador

// Generamos un número aleatorio entre 1 y 20
let numeroSecreto = Math.floor(Math.random() * 20) + 1;

// Variable para guardar el intento del usuario
let intento = 0;

// Variable para controlar el ciclo
let adivinado = false;

// Ciclo que se repetirá hasta que el usuario adivine el número
while (adivinado === false) {

    // Pedimos un número al usuario
    intento = parseInt(prompt("Adivina el número entre 1 y 20"));

    // Condicional:
    // Se usa para verificar si el número ingresado es igual al número secreto.
    if (intento === numeroSecreto) {

        // Este bloque se ejecuta si el usuario adivina correctamente
        alert("¡Felicidades! Adivinaste el número.");

        // Cambiamos la variable para terminar el ciclo
        adivinado = true;

    } else if (intento < numeroSecreto) {

        // Este bloque se ejecuta si el número ingresado es menor
        // que el número secreto.
        alert("Incorrecto. El número secreto es MAYOR.");

    } else {

        // Este bloque se ejecuta si el número ingresado es mayor
        // que el número secreto.
        alert("Incorrecto. El número secreto es MENOR.");


        
    }
}
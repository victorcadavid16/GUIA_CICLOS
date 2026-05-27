// Ejercicio 8 – Control de acceso

// Usuario y contraseña correctos
const usuarioCorrecto = "admin";
const contraseñaCorrecta = "1234";

// Variable para contar los intentos
let intentos = 0;

// Variable para controlar si el usuario logró ingresar
let accesoPermitido = false;

// Ciclo que permite máximo 3 intentos
while (intentos < 3 && accesoPermitido === false) {

    // Pedimos usuario y contraseña
    let usuario = prompt("Ingrese su usuario:");
    let contraseña = prompt("Ingrese su contraseña:");

    // Condicional:
    // Se usa para verificar si el usuario y la contraseña son correctos.
    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {

        // Este bloque se ejecuta si los datos son correctos
        alert("Bienvenido");

        // Cambiamos la variable para terminar el ciclo
        accesoPermitido = true;

    } else {

        // Este bloque se ejecuta si el usuario o la contraseña son incorrectos
        intentos++;

        alert("Usuario o contraseña incorrectos.\nIntento " + intentos + " de 3");
    }
}

// Condicional:
// Se usa para verificar si el usuario agotó los 3 intentos sin ingresar correctamente.
if (accesoPermitido === false) {

    // Este bloque se ejecuta cuando el acceso es denegado
    alert("Acceso denegado");
}
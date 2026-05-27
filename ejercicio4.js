// Ejercicio 4 – Promedio de notas

// Ciclo que se repite 5 veces para ingresar las notas
for (let i = 1; i <= 5; i++) {

    // Pedimos las 3 notas del estudiante
    let nota1 = parseFloat(prompt("Ingrese la primera nota del estudiante " + i));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota del estudiante " + i));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota del estudiante " + i));

    // Calculamos el promedio
    let promedio = (nota1 + nota2 + nota3) / 3;

    // Mostramos el promedio
    alert("El promedio del estudiante " + i + " es: " + promedio.toFixed(2));

    // Condicional:
    // Se usa para verificar si el estudiante aprueba o reprueba.
    // Si el promedio es mayor o igual a 3.0, aprueba.
    if (promedio >= 3.0) {

        // Este bloque se ejecuta cuando la condición es verdadera
        alert("El estudiante " + i + " APRUEBA.");

    } else {

        // Este bloque se ejecuta cuando la condición es falsa
        alert("El estudiante " + i + " REPRUEBA.");
    }
}
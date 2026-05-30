// Ejercicio 5 – Tienda de productos

// Variable para acumular el total de la compra
let totalCompra = 0;

// Variable para controlar el ciclo
let continuar = true;

// Ciclo que permite registrar varios productos
while (continuar) {

    // Pedimos el nombre del producto
    let producto = prompt("Ingrese el nombre del producto:");

    // Pedimos el precio del producto
    let precio = parseFloat(prompt("Ingrese el precio de " + producto));

    // Sumamos el precio al total de la compra
    totalCompra = totalCompra + precio;

    // Mostramos el total acumulado
    alert("Producto agregado correctamente.\nTotal actual: $" + totalCompra);

    // Preguntamos si desea seguir comprando
    let respuesta = prompt("¿Desea agregar otro producto? (si/no)");

    // Condicional:
    // Se usa para decidir si el ciclo continúa o termina.
    // Si la respuesta es diferente de "si", el programa finaliza el ciclo.
    if (respuesta.toLowerCase() !== "si") {

        // Este bloque se ejecuta cuando el usuario no quiere seguir comprando
        continuar = false;
    }
}

// Variable para guardar el descuento
let descuento = 0;

// Condicional:
// Se usa para verificar si la compra supera los $100000.
// Si la condición es verdadera, se aplica un descuento del 10%.
if (totalCompra > 100000) {

    // Calculamos el descuento
    descuento = totalCompra * 0.10;

    // Restamos el descuento al total
    totalCompra = totalCompra - descuento;

    // Mensaje indicando que sí obtuvo descuento
    alert("Se aplicó un descuento del 10%.\nDescuento: $" + descuento);

} else {

    // Este bloque se ejecuta si el total no supera $100000
    alert("La compra no aplica para descuento.");
}

// Mostramos el total final
alert("El total a pagar es: $" + totalCompra);



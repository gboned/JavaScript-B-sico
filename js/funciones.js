/* ------------------------------------- */
//          Creando funciones            //
/* ------------------------------------- */

// Variables globales, la primera devuelve la fecha, la segunda
// devuelve el año actual, a partir de la primera.
var fecha = new Date();
var añoActual = fecha.getFullYear();

// Función con parámetro para devolver el doble de un número.
function doble(numero) {
    // Variable local.
    var resultado = numero * 2;
    return resultado;
}

// Función sin parámetros, que muestra una pequeña ventana para
// introducir un nombre, y la consola devuelve un saludo a este nombre.
function saludo() {
    // Variable local
    var respuesta = window.prompt("Introduce tu nombre", "Nombre");
    console.log("Hola, " + respuesta + " ¿Qué tal estás?");
}

// Función con un parámetro, que usa una variable global definida al principio 
// del fichero, solo para mostrar un ejemplo de uso de las funciones globales, 
// resta el año actual al año de nacimiento de una persona, para obtener edad.
function edad(añoNacimiento) {
    return añoActual - añoNacimiento;
}

// Función con dos parámetros para sumar dos números.
function suma(num1, num2) {
    return num1 + num2;
}
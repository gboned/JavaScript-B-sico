/* ------------------------------------- */
//          Creando funciones            //
/* ------------------------------------- */

// Función con parámetro para devolver el doble de un número.
function doble(a) {
    var resultado = a * 2;
    return resultado;
}

// Función sin parámetros, que muestra una pequeña ventana para
// introducir un nombre, y la consola devuelve un saludo a este nombre.
function saludo() {
    var respuesta = window.prompt("Introduce tu nombre", "Nombre");
    console.log("Hola, " + respuesta + " ¿Qué tal estás?");
}
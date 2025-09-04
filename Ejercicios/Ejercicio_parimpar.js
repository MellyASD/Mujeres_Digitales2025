console.log("=== IF - ELSE  ==="); // Condicionales
const numero = 10; // declarar la constante

if (isNaN(numero)) { //vamos a evaluar si el valor es un numero luego si es impar o par
 console.log("Entrada invalida, no es un numero");
} else if (numero % 2 === 0) {
    console.log("Es par");
} else {
     console.log("Es impar");
}

////Avanzado//
//const readline = require('readline');

// Crear la interfaz para entrada y salida
//const rl = readline.createInterface({
  //input: process.stdin,
  //output: process.stdout
//});

// Encabezado
//console.log("=== IF - ELSE con readline ===");

// Preguntar al usuario por el número
//rl.question("Digita un numero: ", (entrada) => {
  //const numero = Number(entrada); // Convertimos a número

  //if (isNaN(numero)) {
   // console.log("Entrada inválida, no es un número");
  //} else if (numero % 2 === 0) {
   // console.log("Es par");
  //} else {
    //console.log("Es impar");
  //}

//  rl.close(); 
//});
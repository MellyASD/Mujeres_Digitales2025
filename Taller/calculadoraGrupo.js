const readline = require("readline");

const rl = readline.createInterface({ //interfaz para leer y escribir en la consola
  input: process.stdin,
  output: process.stdout,
});

const preguntar = (pregunta) => { //función para hacer preguntas y esperar respuestas
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => resolve(respuesta));
  });
};

// 🔹 Función para pedir números // diseñada para preguntar por 2 digitos en las operaciones básicas 
const pedirNumeros = async () => {
  const num1 = Number(await preguntar("Ingrese el primer número: "));
  const num2 = Number(await preguntar("Ingrese el segundo número: "));
  return { num1, num2 };
};

const menuCalculadora = async () => { //función principal del menú async para usar await y esperar respuestas
  console.clear();
  console.log("===== CALCULADORA BÁSICA =====");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("5. Salir\n");

  const opcion = await preguntar("Selecciona una opción: "); //await para esperar la respuesta del usuario
  let resultado;

  switch (opcion) { //para ir cambiando las opciones
    case "1": { //|suma
      const { num1, num2 } = await pedirNumeros(); //desestructuración para obtener num1 y num2
      resultado = num1 + num2;
      console.log(`✅ Resultado: ${num1} + ${num2} = ${resultado}`);
      break;
    }
    case "2": { //|resta
      const { num1, num2 } = await pedirNumeros(); //desestructuración para obtener num1 y num2
      resultado = num1 - num2;
      console.log(`✅ Resultado: ${num1} - ${num2} = ${resultado}`);
      break;
    }
    case "3": { //|multiplicación
      const { num1, num2 } = await pedirNumeros();
      resultado = num1 * num2;
      console.log(`✅ Resultado: ${num1} × ${num2} = ${resultado}`);
      break;
    }
    case "4": { //|división
      const { num1, num2 } = await pedirNumeros();
      if (num2 === 0) {
        console.log("⚠️ No se puede dividir entre cero.");
      } else {
        resultado = num1 / num2;
        console.log(`✅ Resultado: ${num1} ÷ ${num2} = ${resultado}`); 
      }
      break;
    }
    case "5": //|salir
      console.log("👋 Gracias por usar la calculadora.");
      rl.close();
      return;
    default: //|opción inválida
      console.log("❌ Opción inválida.");
      break;
  }

  await preguntar("\nPresiona ENTER para continuar..."); //espera a que el usuario presione ENTER antes de continuar
  menuCalculadora(); //llamada recursiva para mostrar el menú nuevamente
};

menuCalculadora(); //inicia el menú de la calculadora

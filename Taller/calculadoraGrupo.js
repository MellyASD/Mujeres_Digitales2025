const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const preguntar = (pregunta) => {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => resolve(respuesta));
  });
};

// 🔹 Función para pedir números
const pedirNumeros = async () => {
  const num1 = Number(await preguntar("Ingrese el primer número: "));
  const num2 = Number(await preguntar("Ingrese el segundo número: "));
  return { num1, num2 };
};

const menuCalculadora = async () => {
  console.clear();
  console.log("===== CALCULADORA BÁSICA =====");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("5. Salir\n");

  const opcion = await preguntar("Selecciona una opción: ");
  let resultado;

  switch (opcion) {
    case "1": {
      const { num1, num2 } = await pedirNumeros();
      resultado = num1 + num2;
      console.log(`✅ Resultado: ${num1} + ${num2} = ${resultado}`);
      break;
    }
    case "2": {
      const { num1, num2 } = await pedirNumeros();
      resultado = num1 - num2;
      console.log(`✅ Resultado: ${num1} - ${num2} = ${resultado}`);
      break;
    }
    case "3": {
      const { num1, num2 } = await pedirNumeros();
      resultado = num1 * num2;
      console.log(`✅ Resultado: ${num1} × ${num2} = ${resultado}`);
      break;
    }
    case "4": {
      const { num1, num2 } = await pedirNumeros();
      if (num2 === 0) {
        console.log("⚠️ No se puede dividir entre cero.");
      } else {
        resultado = num1 / num2;
        console.log(`✅ Resultado: ${num1} ÷ ${num2} = ${resultado}`);
      }
      break;
    }
    case "5":
      console.log("👋 Gracias por usar la calculadora.");
      rl.close();
      return;
    default:
      console.log("❌ Opción inválida.");
      break;
  }

  await preguntar("\nPresiona ENTER para continuar...");
  menuCalculadora();
};

menuCalculadora();

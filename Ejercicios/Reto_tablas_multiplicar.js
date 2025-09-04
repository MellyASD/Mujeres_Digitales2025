for (let i = 1; i <= 10; i++) { //el primer ciclo donde se especifica que tabla se va a multiplicar (multiplicando)
  console.log(`Tabla del ${i}`); //ejemplo tabla del 5
  for (let j = 1; j <= 10; j++) { //segundo ciclo (una especie de ciclo interno) donde se especifica el multiplicador
    console.log(`${i} x ${j} = ${i * j}`); // operación matematica
  }
  console.log('------------------'); //para separar las tablas y no se haga reguero
}
// fizzBuzz
// divisível por 3 - "Fizz"
// divisível por 5 - "Buzz"
// divisível por 3 e 5 - 'FizzBuzz'
// não é número - "Não é um número"
// não é divisível por 3 nem por 5 - entrada

function fizzBuzz(entrada) {
  if (typeof entrada !== "number") return "Não é um número";
  if (entrada % 3 === 0 && entrada % 5 === 0) return "FizzBuzz";
  if (entrada % 3 === 0) return "Fizz";
  if (entrada % 5 === 0) return "Buzz";
  return entrada;
}
let resultado = fizzBuzz(14);
console.log(resultado);

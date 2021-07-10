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

// Reverse a string
let newStr = "";
function reverseAString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
    //console.log(newStr);
  }
  console.log(newStr);
}
let resultado2 = reverseAString("Hello Gama Academy");

// converter Celsius em Fahrenheit
function convertToFahrenheit(valor) {
  return valor * 1.8 + 32;
}
let resultado3 = convertToFahrenheit(3);
console.log(`O valor em Fahrenheit é ${resultado3}°F`);

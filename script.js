// fizzBuzz
// divisível por 3 - "Fizz"
// divisível por 5 - "Buzz"
// divisível por 3 e 5 - 'FizzBuzz'
// não é número - "Não é um número"
// não é divisível por 3 nem por 5 - entrada

//function fizzBuzz(entrada) {
//  if (typeof entrada !== "number") return "Não é um número";
//  if (entrada % 3 === 0 && entrada % 5 === 0) return "FizzBuzz";
//  if (entrada % 3 === 0) return "Fizz";
//  if (entrada % 5 === 0) return "Buzz";
//  return entrada;
//}
//let resultado = fizzBuzz(14);
//console.log(resultado);

// Reverse a string
//let newStr = "";
//function reverseAString(str) {
//  for (let i = str.length - 1; i >= 0; i--) {
//    newStr += str[i];
//console.log(newStr);
//  }
//  console.log(newStr);
//}
//let resultado2 = reverseAString("Hello Gama Academy");

// converter Celsius em Fahrenheit
//function convertToFahrenheit(valor) {
//  return valor * 1.8 + 32;
//}
//let resultado3 = convertToFahrenheit(3);
//console.log(`O valor em Fahrenheit é ${resultado3}°F`);

const listContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");

let lists = []; // criar uma array que vai ter a lista dos itens acrescentados

// função que vai ligar o nosso botão. fazer que funcione
newListForm.addEventListener("submit", function (e) {
  //método (função nativa) que liga enventos = addEve... espera receber 2 parâmetros = tipo do envento a ligar e uma função (callback) anonima, que foi o próprio eventeo (e)
  e.preventDefaut(); // todo vez que o navegador recebe um submit, atualiza a página. precisamos previnir este comportamento padrão do navegador
  const listName = newListInput.value; // capturar o valor do  nosso input em listName
  if (listName === null || listName === "") return; // se o input estiver vazio não continuar o algorítimo
  const list = createList(listName); // popular a lista com a função creatList
  newListInput.value = null; // limpar o input depois de confirmar
  lists.push(list); //incluir o intem no final do array
  render(); //mostrar os itens na tela na função render
});
// criar a função render que vai mostrar os itens na tela
function render() {
  lists.forEach(function (list) {
    // laço de repetição forEach. vamos percorrer nossa lista. criar uma função anonima e dentro dela passar cada intem do array chamado de list
    const item = document.createElement("li"); //criamos um variável item, acessamos o conteúdo html para inserir um item criado chamado createElement, que é uma lista (li)
    item.classList.add("item"); // adicionamos uma class ao item li de nome item
    item.innerText = list; //o item li vai receber de texto os itens da lista (list)
    listContainer.appendChild(item); //em qual elemento mãe do html que vai ficar que é a listContainer (o filho é o item list)
  });
}
//criação da função da lista
function createList(name) {
  return { id: Date.now().toString(), nome: name };
}
render();

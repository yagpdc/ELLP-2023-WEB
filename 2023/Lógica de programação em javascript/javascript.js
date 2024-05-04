

// Comentários em Javascript

// comentario
/*   
    outro comentario
*/   

// Console.log em Javascript (exibe uma mensagem no console do navegador)

// alguns exemplos
console.log("Hello World!")
console.log(2 + 2)
console.log("2" + "2")
console.log(2 + "2")
console.log("2" + 2)

// Tipos de dados em Javascript

// String
let nome = "Yago";
// Number
let idade = 23;
// Boolean
let estudante = true;
// Array
let frutas = ["abacaxi", "laranja", "banana"];
// Object
let carro = {cor: "preto", marca: "volkswagen"};
// Null
let cidade = null;
// Undefined
let time;

// Operadores aritméticos em Javascript

// Adição
let adicao = 2 + 2;
// Subtração
let subtracao = 3 - 2;
// Multiplicação
let multiplicacao = 2 * 2;
// Divisão
let divisao = 4 / 2;
// Módulo
let modulo = 5 % 2;

// Const, let, var

// Const
const constante = 2;
// Let
let variavel = 2;
// Var
var variavel2 = 2;

// Exemplos de uso



// Operadores de atribuição em Javascript

// Atribuição
let atribuicao = 2;
// Adição e atribuição
atribuicao += 2;
// Subtração e atribuição
atribuicao -= 2;
// Multiplicação e atribuição
atribuicao *= 2;
// Divisão e atribuição
atribuicao /= 2;
// Módulo e atribuição
atribuicao %= 2;

console.log(atribuicao)

// Operadores de comparação em Javascript

// Igual
let igual = 2 == 2;
// Diferente
let diferente = 2 != 2;
// Estritamente igual
let estritamenteIgual = 2 === 2;
// Estritamente diferente
let estritamenteDiferente = 2 !== 2;
// Maior que
let maiorQue = 2 > 2;
// Maior ou igual que
let maiorOuIgualQue = 2 >= 2;
// Menor que
let menorQue = 2 < 2;
// Menor ou igual que
let menorOuIgualQue = 2 <= 2;

// Operadores lógicos em Javascript

// E
let e = true && true;
// Ou
let ou = true || false;
// Negação
let negacao = !true;


// Condicionais em Javascript

// If

let a = 2
if (2 == 2) {
    console.log("2 é igual a 2");
}
// Else
if (2 == 3) {
    console.log("2 é igual a 3");
}
else {
    console.log("2 não é igual a 3");
}

// Else if

if (2 == 3) {
    console.log("2 é igual a 3");
}
else if (2 == 2) {
    console.log("2 é igual a 2");
}
else {
    console.log("2 não é igual a 3");
}

// Switch
let fruta 

fruta = "abacaxi"

switch (fruta) {
    case "abacaxi":
        console.log("Você escolheu abacaxi");
        break;
    case "laranja":
        console.log("Você escolheu laranja");
        break;
    case "banana":
        console.log("Você escolheu banana");
        break;
    default:
        console.log("fruta não encontrada");
}

// Loops em Javascript

// For

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Do while

let n = 0;
do {
    console.log(i);
    n++;
}
while (i < 10);

// For in

let frutas2 = ["abacaxi", "laranja", "banana"];
for (let i in frutas2) {
    console.log(frutas2[i]);
}

// For of

let frutas3 = ["abacaxi", "laranja", "banana"];
for (let i of frutas3) {
    console.log(i);
}

// Funções em Javascript

// Função sem parâmetro

function funcao() {
    console.log("Olá mundo!");
}

// Função com parâmetro

function funcao2(nome) {
    console.log("Olá " + nome);
}


// Função com retorno

function funcao3(nome) {
    return "Olá " + nome;
}


// Função anônima

let funcao4 = function() {

}

// Função anônima com parâmetro

let funcao5 = function(nome) {

}

// Função anônima com retorno

let funcao6 = function(nome) {

    return "Olá " + nome;

}



// calculadora usando switch

function Calculatrice(num1, num2, operacao) {

    switch (operacao) {
  
      case '+':
        return num1 + num2
        break;
      case '-':
        return num1 - num2
        break;
      case '*':
        return num1 * num2
        break;
      case '/':
        return num1 / num2
        break;
    
    }
  
  }
  console.log(Calculatrice(5, 5, '+'));


  let operacao = "+";
let num1 = 2;
let num2 = 2;
let resultado;

switch (operacao) {
    case "adicao":
        resultado = num1 + num2;
        break;
    case "subtracao":
        resultado = num1 - num2;
        break;
    case "multiplicacao":
        resultado = num1 * num2;
        break;
    case "divisao":
        resultado = num1 / num2;
        break;
    default:
        console.log("Operação inválida");
}

console.log(resultado);


// calculadora IMC

function IMC (altura, peso){
    let resultado = peso / (altura * altura)
    if(resultado < 20 ){
        console.log("Abaixo do peso")
    } else if( resultado > 20 && resultado <= 25) {
        console.log("Peso normal")
    } else if( resultado > 35){
        console.log("Obeso")
    }
}

IMC(1.70, 50)


// calculadora de média

function media (nota1, nota2, nota3){
    let resultado = (nota1 + nota2 + nota3) / 3
    if(resultado < 5 ){
        console.log("Reprovado")
    } else if( resultado >= 5 && resultado <= 7) {
        console.log("Recuperação")
    } else if( resultado > 7){
        console.log("Aprovado")
    }
}

media(5, 5, 5)



// calculadora de média ponderada 

function mediaPonderada (nota1, nota2, nota3){

    let peso1 = 3
    let peso2 = 3
    let peso3 = 4

    let resultado = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)
    if(resultado < 5 ){
        console.log("Reprovado")
    } else if( resultado >= 5 && resultado <= 7) {
        console.log("Recuperação")
    } else if( resultado > 7){
        console.log("Aprovado")
    }
}


mediaPonderada(5, 5, 5)
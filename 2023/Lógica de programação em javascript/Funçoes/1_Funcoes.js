// Funções em Javascript

/* Funções são blocos de código que podem ser executados e reutilizados. 
Elas permitem que você execute um código específico em qualquer parte do seu script.
*/

// Função simples

function hello() {
    console.log("Hello World");
}
hello();


// Arrow function

const hello2 = () => {
    console.log("Hello World Com Arrow Function");
}
hello2();


function game(){
    console.log("Jogo Rodando");
    start();
    end();
}

function start(){
    console.log("Jogo iniciado");
}

function end(){
    console.log("Fim de jogo");
}

game();
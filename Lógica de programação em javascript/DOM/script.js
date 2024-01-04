// Acessando um elemento pelo ID
let meuElemento = document.getElementById("meuElemento");
// Modificando o conteúdo de um elemento
meuElemento.innerHTML = "Novo conteúdo";
// Alterando o estilo de um elemento

meuElemento.style.color = "red";

// setInterval(() => {
//     meuElemento.style.color = `#${generateRandomColor()}`;
// }, 10);


// Adicionando um novo elemento à página
let novoElemento = document.createElement("div");
novoElemento.innerHTML = "Novo elemento";
document.body.appendChild(novoElemento);

let meuBotao = document.getElementById("meuBotao");
meuBotao.addEventListener("click", function () {
    alert("Botão clicado!");
});


function generateRandomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function generateNewElements(elemento, quantidade) {
    for (let i = 0; i < quantidade; i++) {
        let newElement = document.createElement(elemento);
        newElement.innerHTML = "Novo elemento";
        newElement.style.color = "#" + generateRandomColor();
        document.body.appendChild(newElement);
    }
}

// setInterval(
//     function(){
//         generateNewElements("h1",1);
//     }, 1000
// )


let elementoParaRemover = document.querySelector("#remova")
// elementoParaRemover.remove()
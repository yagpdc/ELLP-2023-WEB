function mudarEstilo() {
  var elemento = document.getElementById("paragrafo");
  elemento.style.color = "red";
  elemento.setAttribute("class", "destaque");
}
function mostrarMensagem() {
  alert("Botão clicado!");
}

let conteudo = document.getElementById("conteudo");

function gerarElementos(elemento, quantidade, id,titulo) {
  for (let i = 0; i < quantidade; i++) {
    let novoElemento = document.createElement(elemento);
    novoElemento.innerHTML = titulo;
    novoElemento.setAttribute("id", id);
    conteudo.appendChild(novoElemento);
  }
}

function excluirElemento(id) {
    let elemento = document.getElementById(id);
    elemento.remove();
}



gerarElementos("h1", 6, "titulo", "yago");

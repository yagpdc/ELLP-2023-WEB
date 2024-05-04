let API_KEY =
  "live_URNpAHxXWGrQbC9kQXYC9EfrmqaUezgXosizjjo7HtiXxkxz4RFOdvzWOSTgBsum";

let URL = "https://api.thecatapi.com/v1/images/search?api_key=" + API_KEY;

let div = document.querySelector("#root");
let loader = document.getElementById("loader");
let mainImage = document.getElementById("mainImage");

function showLoader() {
  loader.style.display = "block";
  mainImage.style.display = "none";
}

function hideLoader() {
  loader.style.display = "none";
  mainImage.style.display = "block";
}

function fetchData() {
  showLoader(); // Mostra a imagem de carregamento antes de começar a busca

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      mainImage.src = data[0].url;
      mainImage.addEventListener("load", function () {
        hideLoader(); // Esconde a imagem de carregamento quando a imagem principal é carregada
      });
    })
    .catch((err) => {
      console.log(err);
      hideLoader(); // Certifique-se de esconder a imagem de carregamento em caso de erro
    });
}
fetchData();
 
function next() {
  fetchData();
}

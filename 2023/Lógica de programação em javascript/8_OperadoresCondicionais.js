// Operadores Condicionais em Javascript

// If

let a = 2
if (a == 2) {
    console.log("2 é igual a 2");
}

// Else

if (a == 3) {
    console.log("2 é igual a 3");
}
else {
    console.log("2 não é igual a 3");
}

// Else if

if (a == 3) {
    console.log("2 é igual a 3");
}
else if (2 == a) {
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


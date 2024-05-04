// Funções Recursivas

function recursiva(numero) {
    if (numero >= 10) return;
    numero++;
    console.log(numero);
    recursiva(numero);
}

recursiva(0);

// Fatorial 

/*
    5! = 5 * 4 * 3 * 2 * 1 = 120
*/

function fatorial(numero){
    if(numero === 0){
        return 1;
    } else {
        return numero * fatorial(numero - 1)
    }
}

function ImprimirFatorial(n){
    for(let i = 0; i<=n; i++){
        console.log(`fatorial(${i}) = ${fatorial(i)}`)
    }
}

ImprimirFatorial(5)

function Fibonacci(n){
    if(n === 1 || n === 2){
        return 1;
    } else {
        return Fibonacci(n - 1) + Fibonacci(n - 2)
    }
}

function ImprimirFibonacci(n){
    for(let i = 1; i<=n; i++){
        console.log(`Fibonacci(${i}) = ${Fibonacci(i)}`)
    }
}

ImprimirFibonacci(10)
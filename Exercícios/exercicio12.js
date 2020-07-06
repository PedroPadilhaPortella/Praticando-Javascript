/*Faça um algoritmo que calcule o fatorial de um número*/

function fatorial(valor){
    let fatorial
    while(valor >= 0){
        fatorial += valor
    }
    return fatorial
}

console.log(fatorial(5))
console.log(fatorial(100))
console.log(fatorial(9))
console.log(fatorial(4))
console.log(fatorial(3))
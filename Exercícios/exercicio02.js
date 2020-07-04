function triangulos(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return "Equilátero";
    }else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
        return "Isósceles";
    }else{
        return "Escaleno";
    }
}

console.log(triangulos(3, 3, 3))
console.log(triangulos(3, 6, 6))
console.log(triangulos(8, 2, 8))
console.log(triangulos(7, "7", 12))
console.log(triangulos(12, 15, 18))
console.log(triangulos(-3, -3, "-3"))
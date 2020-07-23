function pares(menor, maior){
    let arr = []
    if(menor > maior){
        var trocar = menor
        menor = maior
        maior = trocar
    }
    for(menor; menor <= maior; menor++ ){
        if(menor % 2 == 0){
            arr.push(menor)
        }
    }
    console.log(arr)
}

pares(10, 2)
pares(-1, 4)
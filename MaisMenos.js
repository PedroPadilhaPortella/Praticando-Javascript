function maisMenos (valores) {
    var positivos = 0;
    var zeros = 0;
    var negativos = 0;
    for (i = 0; i < valores.length; i++) {
        if (valores[i] > 0) {
            positivos = positivos + 1; 
        } else if (valores[i] < 0) {
            negativos = negativos + 1; 
        }else {
            zeros = zeros + 1; 
        }
    }
    positivos = positivos / valores.length;
    zeros = zeros / valores.length;
    negativos = negativos / valores.length;

    var resultado = [positivos, zeros, negativos];
    return resultado;
}

maisMenos([1, 2, 0, -1]);

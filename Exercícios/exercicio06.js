/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos*/

function juros(capitalInicial, taxa, tempo){
    let jurosCompostos = JurosCompostos(capitalInicial, taxa, tempo);
    let jurosSimples = JurosSimples(capitalInicial, taxa, tempo);
    console.log(`Montante à Juros Simples: R$ ${jurosSimples}\nMontante à Juros Compostos: R$ ${jurosCompostos}`);
}

function JurosSimples(capitalInicial, taxa, tempo){
    let montante = capitalInicial + capitalInicial * (1 + taxa * tempo)
    return montante;
}
function JurosCompostos(capitalInicial, taxa, tempo){
    let montante = capitalInicial + capitalInicial * (1 * Math.pow(taxa, tempo))
    return montante;
}

juros(1000, 0.1, 12)
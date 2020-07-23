function habilidades(array){
    var texto;
    for (const entries of array) {
        for (const properties of entries) {
            let frase = `O ${properties.nome} possui as habilidades: ${properties.habilidades}`;
            texto.join(frase)
        }
    }
    return texto;
}

var usuarios = [
    {nome: "Diego", habilidades: ["Javascript", "ReactJS", "Redux"] },
    {nome: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"] }
];

console.log(habilidades(usuarios))
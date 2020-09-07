// Obter um usuário
// preciso obter o numero de telefone do usuário apartir do seu id
// Obter o indereço do usuário apatir do seu id

//módulo interno do node.js
const util = require('util')

const obterEnderecoAsync = util.promisify(obterEndereco) //ira converter uma callback em uma promise

function obterUsuario() {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(function() {
            return resolve({
                id: 1,
                nome: "Samuel",
                dataNascimento: new Date(),
            });
        }, 1000);
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                numero: '1198765-4321',
                ddd: 86,
            });
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            rua: "Rua dos bobos",
            numero: 30,
        }, 2000);
    });
}


async function main() {
    try {
        const usuario = await obterUsuario()
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const telefone = resultado[0]
        const endereco = resultado[1]
        
        console.log(`
Nome: ${usuario.nome}
Endereço: ${endereco.rua}, ${endereco.numero}
Telefone: (${telefone.ddd})${telefone.numero}`)

    }catch(erro) {
        console.error("Deu ruim nisso: ", erro)
    }
}

main()
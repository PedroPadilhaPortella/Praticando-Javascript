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
                telefone: '1198765-4321',
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

const usuarioPromise = obterUsuario()

usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result) {
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            }
        })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado) {
        console.log(`
Nome: ${resultado.usuario.nome}
Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
Telefone: (${resultado.telefone.ddd})${resultado.telefone.numero}`)
    })
    .catch(function (error) {
        console.error(`Deu ruim mano! ${error}`)
    })
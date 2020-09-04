// Obter um usuário
// preciso obter o numero de telefone do usuário apartir do seu id
// Obter o indereço do usuário apatir do seu id

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: "Samuel",
            dataNascimento: new Date(),
        });
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '1199002',
            ddd: 86,
        });
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            rua: "Rua dos bobos",
            numero: 30,
        }, 2000);
    });
}

function resolverUsuario(usuario, error) {
    console.log("usuario", usuario);
}


obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.log("deu ruim", error);
        return;
    }

    obterTelefone(usuario.id, function (error1, telefone) {
        if (error1) {
            console.log("Não funcionou meu caro", error);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.log("deu ruim", error);
                return;
            }

            console.log(`Nome:${ usuario.nome},\nEndereco:${endereco.rua}, ${endereco.numero}\nTelefone:(${telefone.ddd})${telefone.telefone}`);
        });
    });
});
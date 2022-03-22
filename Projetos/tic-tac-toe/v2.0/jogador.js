var Jogador = function () {

	this.jogadasDisponiveis = [];
};

Jogador.prototype.JogadaAleatoria = function () {

	return Math.floor((Math.random() * 10 - 1) + 0);
};

Jogador.prototype.BuscarJogadasDisponiveis = function (jogadas) {

	this.jogadasDisponiveis = [];

	for (i = 0; i < 9; i++) {

		if (jogadas[i] === 0) {

			this.jogadasDisponiveis.push(i);
		}
	}
};

Jogador.prototype.MinMax = function (ganhador, jogadas, jogador) {

	var array = [];
	var indice = 0;
	for (i = 0; i < ganhador.length; i++) {

		indice = i;
		var cont = 0;
		array = ganhador[i].split(",");
		for (x = 0; x < array.length; x++) {

			if (jogadas[array[x]] === jogador) {

				cont = cont + 1;
			}
		}

		if (cont === 2) {

			var arrM
			arrM = ganhador[indice].split(",");
			for (z = 0; z < arrM.length; z++) {

				if (jogadas[arrM[z]] === 0) {
					//SE O USUARIO FOR GANHAR, ENTAO EU EVITO!					
					return arrM[z];
				}
			}
		}
	}
	return 100;
};
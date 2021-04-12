var Tabuleiro = function () {

	this.jogadas = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	this.jogada = 0;
	this.turno = 0;
	this.ganhador = ["0,1,2", "3,4,5", "6,7,8", "0,3,6", "1,4,7", "2,5,8", "0,4,8", "2,4,6"];
};

Tabuleiro.prototype.SomarTurno = function () {

	this.turno = this.turno + 1;
};

Tabuleiro.prototype.ZerarTurno = function () {

	this.turno = 0;
};

Tabuleiro.prototype.SelecionarJogada = function (jogada) {

	this.jogada = jogada;
};

Tabuleiro.prototype.ValidarJogada = function () {

	if (this.jogadas[this.jogada] === 0) {

		return true;
	}
	return false;
};

Tabuleiro.prototype.ConfirmarJogada = function (jogador) {

	this.jogadas[this.jogada] = jogador;
};

Tabuleiro.prototype.PintarBlocoSelecionado = function (e, cor) {

	$(e).css('background-color', cor);
};

Tabuleiro.prototype.ExisteGanhador = function (jogador) {

	var array = [];
	for (i = 0; i < this.ganhador.length; i++) {

		var alguemGanhou = false;
		var cont = 0;
		array = this.ganhador[i].split(",");
		for (x = 0; x < array.length; x++) {

			if (this.jogadas[array[x]] === jogador) {

				cont = cont + 1;
			}
		}

		if (cont === 3) {

			//GANHADOR			
			if (jogador = "X") {
				alguemGanhou = true;
			} else {
				alguemGanhou = false;
			}

			return alguemGanhou;
		}
	}
};
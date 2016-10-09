var db = require('../db_config.js');

exports.list = function(callback){

	db.Pipa.find({}, function(error, pipas) {

		if(error) {

			callback({error: 'Não foi possivel retornar os usuarios'});
		} else {

			callback(pipas);
		}
	});
};


exports.pipa = function(id, callback) {

	db.Pipa.findById(id, function(error, pipa) {

		if(error) {

			callback({error: 'Não foi possivel retornar o usuario'});
		} else {

			callback(pipa);
		}
	});
};


exports.save = function( cor, tamanho, preco,foto, callback){

	new db.Pipa({
		'cor': cor,
		'tamanho': tamanho,
		'preco': preco,
		'foto': foto
	}).save(function(error, pipa) {

		if(error) {

			callback({error: 'Não foi possivel salvar o usuario'});
		} else {

			callback(pipa);
		}
	});
};


exports.update = function(cor, tamanho, preco, foto, callback) {

	db.Pipa.findById(cor, function(error, pipa) {

		if(cor) {

			pipa.cor = cor;
		}

		if(preco) {

			pipa.preco = preco;
		}

		if(tamanho) {

			pipa.tamanho = tamanho;
		}
		if(foto) {

			pipa.foto = foto;
		}
		pipa.save(function(error, pipa) {

			if(error) {

				callback({error: 'Não foi possivel salvar o usuario'});
			} else {

				callback(pipa);
			}
		});
	});
};


exports.delete = function(id, callback) {

	db.Pipa.findById(id, function(error, pipa) {

		if(error) {

			callback({error: 'Não foi possivel retornar o usuario'});
		} else {

			pipa.remove(function(error) {

				if(!error) {

					callback({response: 'Usuário excluido com sucesso'});
				}
			});
		}
	});
};
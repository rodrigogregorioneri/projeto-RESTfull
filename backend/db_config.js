var db_string= 'mongodb://127.0.0.1/sossego_db';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

db.once('open', function() {

	var pipaSchema = mongoose.Schema({

		cor: String,
		tamanho: String,
		preco: String,
		foto: String
	});

	exports.Pipa = mongoose.model('Pipa', pipaSchema);
});



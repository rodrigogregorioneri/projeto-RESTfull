var app = require('./app_config.js');
var validator = require('validator');

var pipaController = require('./controller/pipaController.js');

app.get('/', function(req, res) {

	res.json({status: 'conectado'});
});

app.get('/api/v1/pipas', function(req, res) {

	pipaController.list(function(resp) {

		res.json(resp);
	});
});

app.get('/api/v1/pipas/:cor', function(req, res) {

	var cor = validator.trim(validator.escape(req.param('cor')));

	pipaController.pipa(cor, function(resp) {
		res.json(resp);
	});
});


app.post('/api/v1/pipas', function(req, res) {

	//var id = validator.trim(validator.escape(req.param('id')));
	
	var cor = validator.trim(validator.escape(req.param('cor')));
	var tamanho = validator.trim(validator.escape(req.param('tamanho')));
	var preco = validator.trim(validator.escape(req.param('preco')));
	var foto = validator.trim(validator.escape(req.param('foto')));

	pipaController.save(cor, tamanho, preco,foto, function(resp) {

		res.json(resp);
	});
});

app.put('/api/v1/pipas/', function(req, res) {

	var cor = validator.trim(validator.escape(req.param('cor')));
	var tamanho = validator.trim(validator.escape(req.param('tamanho')));
	var preco = validator.trim(validator.escape(req.param('preco')));
	var foto = validator.trim(validator.escape(req.param('foto')));

	pipaController.update(cor, tamanho, preco,foto, function(resp) {

		res.json(resp);
	});
});

app.delete('/api/v1/pipas/:id', function(req, res) {

	var id = validator.trim(validator.escape(req.param('id')));

	pipaController.delete(id, function(resp) {

		res.json(resp);
	});

});
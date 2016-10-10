var express = require('express');


var app = module.exports = express();

var bodyParser = require('body-parser');

var allowCors = function(req, res, next) {

	// res.setheader('Access-Control-Allow-Origin', '*');
    //  res.setheader('Access-Control-Allow-Origin', 'GET,POST,PUT,DELETE');
     //  res.setheader('Access-Control-Allow-Origin', 'X-Requested-With, content-type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    

	next();
}

app.listen(5000);

app.use(allowCors);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({

	extended: true
}));

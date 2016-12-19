var express = require('express');
var app = express();
var port = 3000;
var middleware = require('./middleware.js');



// app.get('/', function(req, res){
// 	res.send('Hello Express!');
// });
app.use(middleware.logger);
app.get('/about', function(req, res){
	res.send('About us!!!!!!!!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log(port + 'server startes');
});
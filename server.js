'use strict';

const PORT = process.env.PORT || 80;
const SOCKETS = [];

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var chalk = require('chalk');
var paths = require('./config/paths');

process.env.ioConnections = 0;

io.on('connection', function(socket) {
	console.log(chalk.cyan('New connection'));

	SOCKETS.push(socket);

	process.env.ioConnections++;

	socket.on('disconnect', function(){
		console.log('Connection closed');

		SOCKETS.splice(SOCKETS.indexOf(socket), 1);
	});
});

app.use(express.static(paths.appBuild));

app.get('/*', function (request, response) {
	response.send(paths.appBuild + '/index.html');
});

app.use(function(request, response) {
	response.status(404).send(
		'<h1 style="text-align: center;">' +
			'<p>' +
				'Ich hab der Seite gesagt' +
			'</p>' +
			'<p style="font-style: italic;">' +
				'Gehe nachts nicht allein ins Dorf' +
			'</p>' +
			'<p>' +
				'und sie hat nicht gehört! Jetzt ist sie weg!' +
			'</p>' +
			'<br/>' +
			'<p>' +
				'#404' +
			'</p>' +
		'</h1>'
	);
});

app.use(function(error, request, response) {
	console.error(error.stack);

	response.status(500).send(
		'<h1 style="text-align: center;">' +
			'<p>' +
				'Ein Werwolf hat das Spiel kritisch getroffen!' +
			'</p>' +
			'<p>' +
				'Jetzt ist es tot!' +
			'</p>' +
			'<br/>' +
			'<p>' +
				'#500' +
			'</p>' +
		'</h1>'
	);
});

app.listen(PORT, function () {
	console.log(chalk.cyan('Werwolf running on port ' + PORT));
});

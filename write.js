'use stict';

var fs = require('fs');
var fileName = require('./apple.txt');
var animals = JSON.stringify({mammal: 'cat', reptile: 'crocodile'});


function writeToFile(cb, animals) {
	setTimeout(function() {
		cb(animals);
	}, 2000);
}

writeToFile(function(fileName) {
	fs.writeFile('./apple.txt', animals);
});
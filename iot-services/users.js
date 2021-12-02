const express = require('express');

let app = express();

app.get('/users', (req, res, next) => {
	let users= [
		'Antonio Ramirez',
		'Mezly Mondragon',
		'Ana Ramirez',
	];

	res.send(users);
});

app.listen(3001, ()=>{
	console.log('App running on port 3001');
});

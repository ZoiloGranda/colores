const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const https = require('https')
require('dotenv').config()

app.use(express.static(__dirname + '/build'));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(port, () => {
  console.log(`listening on ${port}`)
});
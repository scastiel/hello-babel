// src/server/app.js
import express from 'express';
var app = express();

app.use(express.static(__dirname + '/../../public'));
app.use('/js', express.static(__dirname + '/../../dist/client'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

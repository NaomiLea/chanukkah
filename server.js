var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var port = 3000;
var dispatcher = require('httpdispatcher');
http.listen(port, function() {
    console.log('listening on *: ' + port);
});


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

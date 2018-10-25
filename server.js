var app = require('express')();
var http = require('http').Server(app);
var express = require("express");
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
    socket.on('variable', function(object) {
        console.log(object);
        io.emit('update', object);
    });

    socket.on("join", function(name) {
        socket.emit("join", name);
    })


});







http.listen(3000, function() {
    console.log('listening on *:3000');
    
});

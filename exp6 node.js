// Import the required modules
var express = require('express');
var events = require('events');

// Create an Express application
var app = express();

// Set up routes
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Welcome to JavaTpoint!');
});

app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('I am Impossible!');
});

app.delete('/del_student', function (req, res) {
    console.log("Got a DELETE request for /del_student");
    res.send('I am Deleted!');
});

app.get('/enrolled_student', function (req, res) {
    console.log("Got a GET request for /enrolled_student");
    res.send('I am an enrolled student.');
});

app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Pattern Matched.');
});

// Start the server
var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

// Create an event emitter
var eventEmitter = new events.EventEmitter();

// Listener #1
var listener1 = function () {
    console.log('listener1 executed.');
};

// Listener #2
var listener2 = function () {
    console.log('listener2 executed.');
};

// Bind the connection event with listener1 and listener2
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

// Fire the connection event
eventEmitter.emit('connection');

// Remove listener1 and fire the connection event again
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");
eventEmitter.emit('connection');

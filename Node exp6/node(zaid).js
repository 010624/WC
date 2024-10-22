//for running this use replit


// ========== 1. HTTP Server using HTTP Module ========== //
const http = require('node:http');
const fs = require('fs');
const events = require('events');
const express = require('express');

// HTTP Server Example
function startHttpServer() {
  const listener = function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h2 style="text-align: center;">Hello World</h2>');
  };
  
  const server = http.createServer(listener);
  server.listen(3000);
  
  console.log('HTTP Server running at http://127.0.0.1:3000/');
}

// ========== 2. Callback Program (File Read Example) ========== //
function readFileWithCallback() {
  fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
  });
  
  let i = 1;
  while (i <= 5) {
    console.log("The number is " + i);
    i++;
  }
}

// ========== 3. Event Loop Program ========== //
function eventLoopExample() {
  const eventEmitter = new events.EventEmitter();
  
  // Listener #1
  const listener1 = function() {
    console.log('listener1 executed.');
  };
  
  // Listener #2
  const listener2 = function() {
    console.log('listener2 executed.');
  };
  
  // Bind listeners
  eventEmitter.addListener('connection', listener1);
  eventEmitter.on('connection', listener2);
  
  // Fire the event
  eventEmitter.emit('connection');
  
  // Remove listener1 and fire again
  eventEmitter.removeListener('connection', listener1);
  console.log('Listener1 will not listen now.');
  eventEmitter.emit('connection');
}

// ========== 4. Routing Program using Express ========== //
function expressRoutingExample() {
  const app = express();
  
  app.get('/', (req, res) => {
    console.log("Got a GET request for the homepage");
    res.send('Welcome to JavaTpoint!');
  });
  
  app.post('/', (req, res) => {
    console.log("Got a POST request for the homepage");
    res.send('I am Impossible!');
  });
  
  app.delete('/del_student', (req, res) => {
    console.log("Got a DELETE request for /del_student");
    res.send('I am Deleted!');
  });
  
  app.get('/enrolled_student', (req, res) => {
    console.log("Got a GET request for /enrolled_student");
    res.send('I am an enrolled student.');
  });
  
  app.get('/ab*cd', (req, res) => {
    console.log("Got a GET request for /ab*cd");
    res.send('Pattern Matched.');
  });
  
  const server = app.listen(8000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Example app listening at http://${host}:${port}`);
  });
}

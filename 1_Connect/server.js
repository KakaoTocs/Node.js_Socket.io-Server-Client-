const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log("New client connected!");
  console.log("Socket Info: " + socket.id);
});

server.listen(80, () => {
  console.log('listening on : 80');
});

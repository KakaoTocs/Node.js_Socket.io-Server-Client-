const io = require('socket.io-client');

const socket = io('http://localhost');

socket.on('connect', () => {
  console.log("Hello");
  console.log("Socket connected:", socket.connected);
});

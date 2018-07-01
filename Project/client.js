const io = require('socket.io-client');

const socket = io("http://10.80.161.231:80", {path: '/process'});
// const socket = io('http://localhost');

socket.on('connect', () => {
  console.log("Hello");
  console.log("Socket connected:", socket.connected);

  socket.emit('input', "HelloWorld");
});

socket.on('HelloWorld', () => {
  console.log("HelloWorld!");
});

socket.on('direct', (data) => {
  console.log('direct:', data);
});

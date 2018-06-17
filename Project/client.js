const io = require('socket.io-client');

const socket = io("http://10.72.160.181:80");
// const socket = io('http://localhost');

socket.emit('join', {id: 'number1'});

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

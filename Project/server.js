const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/AndroidProject');
const db = mongoose.connection;

db.on('error', (error) => {
  console.log('DB Connection Failed!');
  console.log('Log: ' + error);
});
db.once('open', () => {
  console.log("DB Connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});
*/

const user = require('./routes/user.js')(db);
app.use('/user', user);


io.on('connection', (socket) => {
  console.log("Socket Info: " + socket.id);
  socket.emit('direct', 'many client');

  socket.on('join', (data) => {
    socket.join(data.id);
    console.log("Join client");
    socket.in(data.id).emit('direct', 'one client');
  });

  socket.on('input', (data) => {
    console.log("Get data:", data);
    socket.emit(data);
  });

  socket.on('disconnect', () => {
    console.log("Client disconnected!");
    console.log("Socket Info: " + socket.id);
  });
});

server.listen(80, () => {
  console.log('listening on : 80');
});

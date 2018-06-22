const express = require('express');
const router = express.Router();

module.exports = (db, io) => {

  router.get("/", (req, res) => {
    res.status(200).json({test: "서버 열심히 일하고 있습니다."});
  });

  // const processSocket = io('/process', {forceNew: true});
  io.on('connection', (socket) => {
    console.log("Socket Info: " + socket.id);
    socket.on('hi', () => {
      console.log("C# Client connected");
    });

    socket.emit('direct', 'many client');

    socket.on('join', (data) => {
      socket.join(data.id);
      console.log("Join client");
      socket.in(data.id).emit('direct', 'one client');
    });

    socket.on('hi', () => {
      console.log("C# Client connected");
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

  return router;
};

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://192.168.0.9:27017/AndroidProject', {useMongoClient: true});
var db = mongoose.connection;

db.on('error', (error) => {
  console.log('DB Connection Failed!');
  console.log('Log: ' + error);
});
db.once('open', () => {
  console.log("DB Connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const main = require("./routes/main.js")(db, io);
app.use('/', main);
const user = require('./routes/user.js')(db);
app.use('/user', user);
const admin = require('./routes/admin.js')(db);
app.use('/admin', admin);


// const process = require('./routes/process.js')(db, io);
// app.use('/process', process);

server.listen(process.env.PORT || 8000, () => {
  console.log('listening on : 8000');
});
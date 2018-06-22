const mongoose = require('mongoose');

var user = mongoose.Schema({
  id: Number,
  logs: [{
    processName: String,
    time: String,
    action: Number,
    block: Boolean
  }]
});

module.exports = mongoose.model('users', user);

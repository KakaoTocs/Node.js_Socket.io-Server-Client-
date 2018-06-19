const mongoose = require('mongoose');

var user = mongoose.Schema({
  id: Number,
  Log: [{
    processName: String,
    time: String,
    action: Number,
    block: Boolean
  }]
});

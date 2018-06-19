const mongoose = require('mongoose');

// var newID = mongoose.Schema({
//   id: Number
// });
var newID = new mongoose.Schema({
  id: Number
});

module.exports = mongoose.model('newID', newID);

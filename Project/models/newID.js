const mongoose = require('mongoose');

const newID = new mongoose.Schema({
  Id: String
});

module.exports = mongoose.model('newID', newID);

const express = require('express');
const router = express.Router();
const newID = require('./../models/newID');

module.exports = (db) => {
  router.get('/new', (req, res) => {
    newID.find(function(err, ids){
      if(err) {
        console.log(">>newID: " + err);
        res.status(400).json({code: 400, message: "get newID fail"});
      } else {
        console.log('give newID: ' + ids);
        const result = {
          newID: ids
        };
        res.status(200).json(result);
      }
    });
  });

  router.get('/log', (req, res) => {
    res.status(200).json([{processName: "github"}, {processName: "iTunes"}]);
  });

  return router;
};

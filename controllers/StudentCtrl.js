//////move to controllers foler, name file StudentCtrl.js////////

var Student = require('../models/StudentModel');


module.exports.findStudent = function(req, res) {
Student.find(req.body, function(err, result) {
      if(err) {
        res.send(err);
      }else {
        res.json(result);
      }
    });
};


module.exports.createStudent = function(req, res) {
    Student.create(req.body, function(err, result) {
      if(err) {
        res.send(err);
      }else {
        res.json(result);
      }
    });
};


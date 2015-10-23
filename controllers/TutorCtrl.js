/////move to controllers foler, name file TutorsCtrl.js////////

var Tutor = require('../models/TutorModel');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

module.exports = {
    findAllTutors: function(req, res) {
      Tutor.find({}, function(err, resp) {
          if(err) return res.status(500).json(err);
          return res.status(200).json(resp);
      });
    },
 findTutor: function(req, res) {
    Tutor.find({'_id': req.params.id}, function(err, result) {
      if(err) {
        res.send(err);
      }else {
        res.json(result);
      }
    });
},

    updateTutor: function (req, res) {
     Tutor.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedTutor) {
        if(err) return res.status(500).json(err);
         return res.status(200).json(updatedTutor);
     });
    },

    removeTutor: function(req, res) {
        Tutor.remove({'_id': req.params.id}, function(err, result) {
      if(err) {
        res.send(err);
      }else {
        res.json(result);
      }
        });
        },

//    addTutor: function (req, res) {
//    var Tutor;
//    Tutor = new Tutor({
//        fname: req.body.fname,
//        lname: req.body.lname,
//        email: req.body.email,
//        location: req.body.location,
//        subject: req.body.subject
//    });
//    Tutor.save(function (err) {
//        if (!err) {
//            console.log("created");
//        } else {
//            console.log(err);
//        }
//    });
//
//    return res.send(Tutor);
//},

    createTutor: function(req, res) {
    Tutor.create(req.body, function(err, result) {
          if(err) {
              console.log(err);
            return res.status(500).json(err);
          }else {
            return res.status(200).json(result);
          }
        });
}
};



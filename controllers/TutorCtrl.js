/////move to controllers foler, name file TutorsCtrl.js////////

var Tutor = require('../models/TutorModel');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

///* GET /todos listing. */
//router.get('/api/tutors', function(req, res, next) {
//  Tutor.find(function (err, todos) {
//    if (err) return next(err);
//    res.json(Tutor);
//  });
//});
//
//router.post('/', function(req, res, next) {
//  Tutor.create(req.body, function (err, post) {
//    if (err) return next(err);
//    res.json(post);
//  });
//});
///* GET /todos/id */
//router.get('/api/tutors/:id', function(req, res, next) {
//  Tutor.findById(req.params.id, function (err, post) {
//    if (err) return next(err);
//    res.json(post);
//  });
//});
//
///* PUT /todos/:id */
//router.put('/api/tutors/:id', function(req, res, next) {
//  Tutor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//    if (err) return next(err);
//    res.json(post);
//  });
//});
//
//router.delete('/api/tutors/:id', function(req, res, next) {
//  Tutor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//    if (err) return next(err);
//    res.json(post);
//  });
//});
//module.exports = router;

module.exports = {
    findAll: function(req, res) {
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


createTutor: function(req, res) {
    Tutor.create(req.body, function(err, result) {
          if(err) {
            return res.status(500).json(err);
          }else {
            return res.status(200).json(result);
          }
        });
}
};

//function getTutors(res){
//	Tutor.find(function(err, tutor) {
//
//			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
//			if (err)
//				res.send(err)
//
//			res.json(tutor); // return all todos in JSON format
//		});
//};
//
//module.exports = function(app) {
//app.get('/api/tutors', function(req, res) {
//
//        // use mongoose to get all tutors in the database
//        Tutor.find(function(err, Tutor) {
//
//            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//            if (err)
//                res.send(err);
//
//            res.json(Tutor); // return all todos in JSON format
//        });
//});
//
//    // create tutor and send back all tutors after creation
//    app.post('/api/tutors', function(req, res) {
//
//        // create a tutor, information comes from AJAX request from Angular
//        Tutor.create({
//            text : req.body.text,
//            done : false
//        }, function(err, Tutor) {
//            if (err)
//                res.send(err);
//
//            // get and return all the tutors after you create another
//            Tutor.find(function(err, Tutor) {
//                if (err)
//                    res.send(err);
//                res.json(Tutor);
//            });
//        });
//
//    });
//
//    // delete a tutor
//    app.delete('/api/tutors/:id', function(req, res) {
//        Tutor.remove({
//            _id : req.params.todo_id
//        }, function(err, tutor) {
//            if (err)
//                res.send(err);
//
//            // get and return all the tutors after you create another
//            Tutor.find(function(err, tutor) {
//                if (err)
//                    res.send(err)
//                res.json(tutor);
//            });
//        });
//    });
//}

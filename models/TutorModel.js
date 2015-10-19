/////move this  to models folder, name file TutorModel.js///////////
var mongoose = require('mongoose');

var Tutorschema = new mongoose.Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  email: {type: String, required: true},
  location: {type: String, required: true},
  rating: {type: Number, required: true, min: 0},
    subject: {type: String}
});
module.exports = mongoose.model('Tutor', Tutorschema);

//check if user is logged in and if already in db
//exports.login = function(req, res, next) {
//  req.db.User.findOne({
//      email: req.body.email,
//      password: req.body.password
//    },
//    null, {
//      safe: true
//    },
//    function(err, user) {
//      if (err) return next(err);
//      if (user) {
//        req.session.auth = true;
//        req.session.userId = user._id.toHexString();
//        req.session.user = user;
//        if (user.admin) {
//          req.session.admin = true;
//        }
//        console.info('Login USER: ' + req.session.userId);
//        res.json(200, {
//          msg: 'Authorized'
//        });
//      } else {
//        next(new Error('User is not found.'));
//      }
//    });
//};

//logout
//exports.logout = function(req, res) {
//  console.info('Logout USER: ' + req.session.userId);
//  req.session.destroy(function(error) {
//    if (!error) {
//      res.send({
//        msg: 'Logged out'
//      });
//    }
//  });
//};

//profile page?
//exports.profile = function(req, res, next) {
//  req.db.User.findById(req.session.userId, 'firstName lastName'
//      + 'displayName headline photoUrl admin'
//      + 'approved banned role angelUrl twitterUrl'
//      + 'facebookUrl linkedinUrl githubUrl', function(err, obj) {
//    if (err) next(err);
//    if (!obj) next(new Error('User is not found'));
//    req.db.Post.find({
//      author: {
//        id: obj._id,
//        name: obj.displayName
//      }
//    }, null, {
//      sort: {
//        'created': -1
//      }
//    }, function(err, list) {
//      if (err) next(err);
//      obj.posts.own = list || [];
//      req.db.Post.find({
//        likes: obj._id
//      }, null, {
//        sort: {
//          'created': -1
//        }
//      }
//
//       //delete profile
//    exports.delProfile = function(req, res, next) {
//  console.log('del profile');
//  console.log(req.session.userId);
//  req.db.User.findByIdAndRemove(req.session.user._id, {},
//    function(err, obj) {
//      if (err) next(err);
//      req.session.destroy(function(error) {
//        if (err) {
//          next(err)
//        }
//      });
//      res.json(200, obj);
//    }
//  );
//};

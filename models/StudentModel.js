/////move this  to models folder, name file StudentsModel.js///////////
var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var Studentschema = new mongoose.Schema({
  fname: {type: String, unique: true, required: true},
  lname: {type: String, unique: true, required: true},
  subject: {type: String, required: true},
});
var Students = mongoose.model('Student', Studentschema);

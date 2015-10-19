var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST
//build the REST operations at the base for blobs
//this will be accessible from http://127.0.0.1:3000/blobs if the default route for / is left unchanged
router.route('/')
    //GET all blobs
    .get(function(req, res, next) {
        //retrieve all blobs from Monogo
        mongoose.model('Tutors').find({}, function (err, tutors) {
              if (err) {
                  return console.error(err);
              } else {
                  //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
                  res.format({
                      //HTML response will render the index.jade file in the views/blobs folder. We are also setting "blobs" to be an accessible variable in our jade view
                    html: function(){
                        res.render('/views/tutors', {
                              title: 'Every Tutor',
                              "tutors" : tutors
                          });
                    },
                    //JSON response will show all blobs in JSON format
                    json: function(){
                        res.json(tutors);
                    }
                });
              }
        });
    })
    //POST a new blob
    .post(function(req, res) {
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        var name = req.body.name;
        var badge = req.body.badge;
        var dob = req.body.dob;
        var company = req.body.company;
        var isloved = req.body.isloved;
        //call the create function for our database
        mongoose.model('Tutor').create({
            fname: {type: String, required: true},
  lname: {type: String, required: true},
  email: {type: String, required: true},
  location: {type: String, required: true},
  rating: {type: Number, required: true, min: 0},
    subject: [{
      subject: String,
      subsubject: String
}]
});
        }, function (err, tutors) {
              if (err) {
                  res.send("There was a problem adding the information to the database.");
              } else {
                  //Blob has been created
                  console.log('POST creating new tutor: ' + tutors);
                  res.format({
                      //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
                    html: function(){
                        // If it worked, set the header so the address bar doesn't still say /adduser
                        res.location("tutors");
                        // And forward to success page
                        res.redirect("/tutors");
                    },
                    //JSON response will show the newly created blob
                    json: function(){
                        res.json(tutors);
                    }
                });
              }
        })
    });
router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))

/* GET New Tutor page. */
router.get('/signup', function(req, res) {
    res.render('views/signup', { title: 'Add New Tutor' });
});


// route middleware to validate :id
router.param('id', function(req, res, next, id) {
    //console.log('validating ' + id + ' exists');
    //find the ID in the Database
    mongoose.model('Tutor').findById(id, function (err, blob) {
        //if it isn't found, we are going to repond with 404
        if (err) {
            console.log(id + ' was not found');
            res.status(404)
            var err = new Error('Not Found');
            err.status = 404;
            res.format({
                html: function(){
                    next(err);
                 },
                json: function(){
                       res.json({message : err.status  + ' ' + err});
                 }
            });
        //if it is found we continue on
        } else {
            //uncomment this next line if you want to see every JSON document response for every GET/PUT/DELETE call
            //console.log(blob);
            // once validation is done save the new item in the req
            req.id = id;
            // go to the next thing
            next();
        }
    });
});

router.route('/:id')
  .get(function(req, res) {
    mongoose.model('Tutor').findById(req.id, function (err, tutors) {
      if (err) {
        console.log('GET Error: There was a problem retrieving: ' + err);
      } else {
        console.log('GET Retrieving ID: ' + tutors._id);
        var tutorsdob = tutors.dob.toISOString();
        tutorsdob = tutorsdob.substring(0, tutorsdob.indexOf('T'))
        res.format({
          html: function(){
              res.render('views/tutors', {
                "tutorsdob" : tutorsdob,
                "tutors" : tutors
              });
          },
          json: function(){
              res.json(tutors);
          }
        });
      }
    });
  });


//GET the individual blob by Mongo ID
router.get('/:id/edit', function(req, res) {
    //search for the blob within Mongo
    mongoose.model('Tutors').findById(req.id, function (err, tutors) {
        if (err) {
            console.log('GET Error: There was a problem retrieving: ' + err);
        } else {
            //Return the blob
            console.log('GET Retrieving ID: ' + blob._id);
            //format the date properly for the value to show correctly in our edit form
          var tutorsdob = tutors.dob.toISOString();
          tutorsdob = tutorsdob.substring(0, tutorsdob.indexOf('T'))
            res.format({
                //HTML response will render the 'edit.jade' template
                html: function(){
                       res.render('views/tutorProfile', {
                          title: 'Blob' + tutors._id,
                        "tutorsdob" : tutorsdob,
                          "tutors" : tutors
                      });
                 },
                 //JSON response will return the JSON output
                json: function(){
                       res.json(Tutors);
                 }
            });
        }
    });
});

//PUT to update a blob by ID
router.put('/:id/edit', function(req, res) {
    // Get our REST or form values. These rely on the "name" attributes
    var fname = req.body.fname;
    var lname = req.body.lname;
    var location = req.body.location;
    var rating = req.body.rating;
    var subject = req.body.subject;

   //find the document by ID
        mongoose.model('Tutors').findById(req.id, function (err, tutors) {
            //update it
            tutors.update({
                fname : fname,
                lname : lname,
                location : location,
                rating : rating
            }, function (err, tutorsID) {
              if (err) {
                  res.send("There was a problem updating the information to the database: " + err);
              }
              else {
                      //HTML responds by going back to the page or you can be fancy and create a new view that shows a success page.
                      res.format({
                          html: function(){
                               res.redirect("/tutors/" + tutors._id);
                         },
                         //JSON responds showing the updated values
                        json: function(){
                               res.json(tutors);
                         }
                      });
               }
            })
        });
});


//DELETE a Blob by ID
router.delete('/:id/edit', function (req, res){
    //find blob by ID
    mongoose.model('Tutors').findById(req.id, function (err, tutors) {
        if (err) {
            return console.error(err);
        } else {
            //remove it from Mongo
            blob.remove(function (err, tutors) {
                if (err) {
                    return console.error(err);
                } else {
                    //Returning success messages saying it was deleted
                    console.log('DELETE removing ID: ' + tutors._id);
                    res.format({
                        //HTML returns us back to the main page, or you can create a success page
                          html: function(){
                               res.redirect("/tutors");
                         },
                         //JSON returns the item with the message that is has been deleted
                        json: function(){
                               res.json({message : 'deleted',
                                   item : tutors
                               });
                         }
                      });
                }
            });
        }
    });

module.exports = router;

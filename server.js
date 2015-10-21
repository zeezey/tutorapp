var bodyParser  = require('body-parser'),
    cors        = require('cors'),
    mongoose    = require('mongoose'),
    express     = require('express'),
    app         = express(),
    router = express.Router(),
    TutorCtrl = require('./controllers/TutorCtrl'),
    StudentCtrl = require('./controllers/StudentCtrl'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('./models/users'),
    UserCtrl = require('./controllers/UserCtrl'),
    helmet = require('helmet'),
    bcrypt = require('bcryptjs');
//tutors = require('./routes/Tutor');

app.use( express.static(__dirname + '/public') );
app.use( bodyParser.json() );
app.use( cors() );
app.use(helmet());


//////then create a controllers folder.  create TutorCtrl.js and StudentCtrl.js files

app.post('/user', UserCtrl.register);
app.get('/user', UserCtrl.me);

app.post('/api/tutors', TutorCtrl.createTutor);
//app.post('/api/tutors', TutorCtrl.addTutor);
//app.del('/api/tutors/:id', TutorCtrl.removeTutor);
app.get('/api/tutors', TutorCtrl.findAllTutors);
app.get('/api/tutors/:id', TutorCtrl.findTutor);

app.get('/api/students', StudentCtrl.createStudent);
app.get('/api/students', StudentCtrl.findStudent);
app.delete('/api/tutors/:id', TutorCtrl.removeTutor);
app.put('/api/tutors/:id', TutorCtrl.updateTutor);

 //Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
// TODO - Why Do we need this key ?
app.use(expressSession({secret: 'thisisasecret'}));
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport
//var initPassport = require('./passport/init');
//initPassport(passport);

//var routes = require('./public/index')(passport);
//app.use('/', routes);


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json('error', {
            message: err.message,
            error: err
        });
    });
}


passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, done) {
    User.findOne({ email: email })
  .exec(function(err, user) {
    if(err) done(err);
    if(!user) return done(null, false);
    if(user.verifyPassword(password)) return done(null, user);
    return done(null, false);
  });
}));

app.post('/login', passport.authenticate('local', {
  failureRedirect: '/#/login',
  successRedirect: '/#/home'
}));

app.get('/logout', function(req, res) {
  req.logout();
  return res.send('logged out');
});


passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

var mongoPort = process.env.MONGO_PORT || 27017;
var mongoURI  = 'mongodb://localhost:' + mongoPort + '/tutors';
// mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
  console.log('mdb listening on:', mongoPort);
});

var serverPort = process.env.EXPRESS_PORT || 8181;
app.listen(serverPort, function() {
  console.log('srv listening on:', serverPort);
});
mongoose.createConnection('mongodb://localhost:27017/profDB');
//mongoose.connect('mongodb://localhost:27017/profDB');

module.exports = app;

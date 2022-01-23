const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const config = require('./config/database');

const mongoose = require('mongoose');
mongoose.connect(config.database);
let db = mongoose.connection;

// Check connection
db.once('open', function(){
    console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(){
    console.log(err);
});

// Init App
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// Bring in User Model
let User = require('./models/user');

// Body Parser Middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session Middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// Passport Config
require('./config/passport')(passport);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
    next();
});

// Login Route - First page users are directed to
app.get('/', function(req, res){
    res.render('login');
});

//req.user._id

// Homepage Route
app.get('/homepage', function(req, res){
    if(req.user){
        User.findById(req.user.id, function(err, user){
            if(err){
                console.log(err);
            } else {
                res.render('homepage', {
                    name: user.name,
                    user_id: user.id
                });
            }
        });     
    } else {
        res.render('homepage');
    }
});

// Updating User Trees
app.put('/homepage/:id', function(req,res){
    
    let query = {_id: req.params.id}
    
    let data = req.body; 

    User.findOneAndUpdate(query, {$set: data}, function(err, result){
        if(err){
            console.log(err);
        }
        res.send('Tree updated successfully');
    });
});

// User.findById(query, function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         let userTree = user.tree
//         console.log("user tree:" + userTree);
//         return userTree;
//     }
// });   

// console.log(data);
// console.log(userTree);

// let addTree = data + userTree


// Route Files
let users = require('./routes/users');
app.use('/users', users);

//Start Server
app.listen(3000, function(){
    console.log('Server started on port 3000...')
});
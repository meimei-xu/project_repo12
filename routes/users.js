const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Bring in User Model
let User = require('../models/user');

// Register Form
router.get('/register', function(req, res){
    res.render('register', {
        errors: {}
    });
});

// Register Process
router.post('/register', function(req, res){

    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;

    //Testing Trees
    let tree = 0;
    
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);


    let errors = req.validationErrors();

    if (errors) {
        res.render('register', {
            errors:errors
        });
        // req.flash('danger', 'Entered Wrong things');
    } else {
        let newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password,
            tree: tree
        });

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newUser.password, salt, function(err, hash){
                if(err){
                    console.log(err);
                }
                newUser.password = hash;
                newUser.save(function(err){
                    if(err){
                        console.log(err);
                        return;
                    } else {
                        req.flash('success','Registration Successful');
                        res.redirect('/users/login');
                    }
                });
            });
        });
    }
});

// Login Form
router.get('/login', function(req, res){
    res.render('login');
});

// Login Process
router.post('/login', function(req, res, next){
    passport.authenticate('local', {
        // link to the homepage
        successRedirect:'/homepage',
        failureRedirect:'/users/login',
        failureFlash: true 
    })(req, res, next);
});

// Logout
router.get('/logout', function(req, res){
    req.logout();
    req.flash('success', 'Loggout Successful');
    res.redirect('/');
});

module.exports = router;
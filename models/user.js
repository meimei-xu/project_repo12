/* This file constructs a User schema in order to create a user 
in our database, listing all the required fields for each user */

const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    tree: {
      type: Number,
      required: true
    }
});
  
const User = module.exports = mongoose.model('User', UserSchema);
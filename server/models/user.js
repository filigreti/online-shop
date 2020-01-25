const mongoose = require('mongoose');

const userScema = mongoose.Schema({
  firstName: {
    type: String,
    maxlength: 40
  },
  lastName: {
    type: String,
    maxlength: 40
  },
  email: {
    type: String,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    minLength: 6
  },
  role: {
    type: Number
  },
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
});

const User = mongoose.model('User', userScema);

module.exports = User;

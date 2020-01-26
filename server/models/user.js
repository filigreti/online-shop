const mongoose = require('mongoose');

const userScema = new mongoose.Schema({
  firstName: {
    type: String,
    maxlength: 40,
    required: true
  },
  lastName: {
    type: String,
    maxlength: 40,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minLength: 6,
    required: true
  },
  role: {
    type: Number,
    default: 0
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

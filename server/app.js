const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const colors = require('colors');
require('dotenv').config();
const app = express();

const db = require('./database');
const User = require('./models/user');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

let port = process.env.PORT;

app.post('/api/users/register', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      data: error
    });
  }
});

db();
app.listen(port, () => {
  console.log(
    `Server running on ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  );
});

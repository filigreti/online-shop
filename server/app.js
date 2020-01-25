const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

let port = process.env.PORT;
let DB = process.env.DB;

app.get('/', (req, res) => {
  res.json({
    data: 'We here'
  });
});

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));

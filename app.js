const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const pageRoutes = require('./routes/pageRoutes');

const app = express();

// CREATE DATABASE CONNECTION
mongoose.connect('mongodb://localhost:27017/freelancerProject')
.then(() => {
    console.log('DB Connected');
  }).catch((err) => {
    console.log(err);
  });
  ;

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method', {
    methods:['POST','GET'],
  }));

app.use('/', pageRoutes);

const port = 3000;

app.listen(port, () => {
    console.log(`App Started on Port ${port}`);
});
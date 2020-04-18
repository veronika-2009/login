const express = require('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const mysql = require("mysql2");
const sequelize = require('sequelize')
const app = express();
require('es6-promise').polyfill();
require('isomorphic-fetch');


var port = process.env.PORT || 3000

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



let Users = require('./my-app/routes/Users');
app.use('/', Users)


app.listen(3000, function () {
  console.log('Example app listening on port 3000');
 });
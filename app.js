var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./config/routes.js");
var db = require('./config/db');

global.__root   = __dirname + '/'; 
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

module.exports = app;

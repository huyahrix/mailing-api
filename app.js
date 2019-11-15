/*
 * @Author: huyahrix
 * @Email: infjnite@gmail.com
 * @Date: 2019-11-15 11:06:03
 * @Last Modified by:   huyahrix
 * @Last Modified time: 2019-11-15 11:06:03
 * @Description: Description
 */

var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./config/routes.js");
var db = require('./config/mongodb');

global.__root   = __dirname + '/'; 
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

module.exports = app;

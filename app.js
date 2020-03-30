/*
 * @Author: huyahrix
 * @Email: infjnite@gmail.com
 * @Date: 2019-11-15 11:06:03
 * @Last Modified by: huyahrix
 * @Last Modified time: 2020-03-30 17:59:19
 * @Description: Description
 */
'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./config/routes.js');
var morgan = require('morgan');

// var db = require('./config/mongodb');

global.__root   = __dirname + '/';
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
//app.use(app.router);
routes(app);

module.exports = app;

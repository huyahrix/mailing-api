/*
 * @Author: huyahrix
 * @Email: infjnite@gmail.com
 * @Date: 2019-11-15 11:06:03
 * @Last Modified by: huyahrix
 * @Last Modified time: 2020-03-30 17:59:19
 * @Description: Description
 */
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const initRoutes = require('./config/routes.js');
const morgan = require('morgan');

// const db = require('./config/mongodb');

global.__root   = __dirname + '/';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use(express.static('api/views'));
initRoutes(app);

module.exports = app;

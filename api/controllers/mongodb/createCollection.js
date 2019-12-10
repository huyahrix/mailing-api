/* eslint-disable no-unused-vars */

/*
 * @Author: huyahrix
 * @Email: infjnite@gmail.com
 * @Date: 2019-11-18 13:39:16
 * @Last Modified by: huyahrix
 * @Last Modified time: 2019-11-25 17:03:37
 * @Description: Description
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));

// A collection in MongoDB is the same as a table in MySQL
// To create a collection in MongoDB, use the createCollection() method:
// Important: In MongoDB, a collection is not created until it gets content!

router.post('/', function (req,res) {
    var url = 'mongodb+srv://sa:123@cluster0-sg9bv.mongodb.net/';
    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect(url, function (err, db) {
        if (err) {throw err;}
        var dbo = db.db('mydb');
        dbo.createCollection('customers', function (err, res) {
            if (err) {throw err;}
            console.log('Collection created!');
            db.close();
        });
        return res.status(200).send('Collection created!');
    });
});

module.exports = router;



/*
 * @Author: huyahrix
 * @Email: infjnite@gmail.com
 * @Date: 2019-11-18 13:39:16
 * @Last Modified by: huyahrix
 * @Last Modified time: 2019-11-25 17:28:21
 * @Description: https://www.w3schools.com/nodejs/nodejs_mongodb_createcollection.asp
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));


/** Create A Database
 * To create a database in MongoDB, start by creating a MongoClient object,
 * then specify a connection URL with the correct ip address and the name of the database you want to create.
 * MongoDB will create the database if it does not exist, and make a connection to it. not realy
 */

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://sa:123@cluster0-sg9bv.mongodb.net/';

router.post('/create-database', function (req,res) {
    MongoClient.connect(`${url}/mydb`,{useNewUrlParser: true,useUnifiedTopology: true}, function(err, db) {
        if (err) {
            throw err;
        }
        db.close();
    });
    console.log('Database created!');
    res.status(200).send('Database created!');
});

/** Create collection
 * A collection in MongoDB is the same as a table in MySQL
 * To create a collection in MongoDB, use the createCollection() method:
 * Important: In MongoDB, a collection is not created until it gets content!
 */

router.post('/create-collection', function (req,res) {
    MongoClient.connect(url,{useNewUrlParser: true,useUnifiedTopology: true}, function (err, db) {
        if (err) {throw err;}
        var dbo = db.db('mydb');
        dbo.createCollection('customers', function (err) {
            if (err) {throw err;}
            console.log('Collection created!');
            db.close();
        });
        return res.status(200).send('Collection created!');
    });
});

module.exports = router;


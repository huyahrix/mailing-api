
/*
 * @Author: huyahrix
 * @Email: infjnite@gmail.com
 * @Date: 2019-11-18 13:39:16
 * @Last Modified by: huyahrix
 * @Last Modified time: 2019-11-18 14:41:24
 * @Description: Description
 */


var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

//var VerifyToken = require('../auth/VerifyToken');

router.use(bodyParser.urlencoded({
    extended: true
}));

var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/';
var url = 'mongodb+srv://sa:123@cluster0-sg9bv.mongodb.net/';

router.post('/', function (req, res) {
    MongoClient.connect(url,{useNewUrlParser: true,useUnifiedTopology: true}, function (err, db) {
        if (err) {
            throw err;
        }
        var dbo = db.db('mydb');
        // eslint-disable-next-line no-unused-vars
        dbo.createCollection('customers', function (err, res) {
            if (err) {
                throw err;
            }
            console.log('Collection created!');
            db.close();
            res.status(200).send('hi');
        });
    });
}, function (err, user) {
    if (err) {
        return res.status(500).send('There was a problem adding the information to the database.');
    }
    res.status(200).send(user);
});

// // CREATES A NEW USER
// router.post('/', function (req, res) {
//     User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     },
//         function (err, user) {
//             if (err) {
//                 return res.status(500).send('There was a problem adding the information to the database.');
//             }
//             res.status(200).send(user);
//         });
// });

module.exports = router;


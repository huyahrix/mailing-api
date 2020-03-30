/*
 * @Author: huyahrix
 * @Email: infjnite@gmail.com
 * @Date: 2019-11-15 11:07:25
 * @Last Modified by: huyahrix
 * @Last Modified time: 2020-03-30 18:08:10
 * @Description: Description
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var midleware = require('../../policies/middleware');
let jwt = require('jsonwebtoken');
const config = require('../../../config');


//var VerifyToken = require('../auth/VerifyToken');

router.use(bodyParser.urlencoded({
    extended: true
}));
var User = require('./User');

// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },
        function (err, user) {
            if (err) {
                return res.status(500).send('There was a problem adding the information to the database.');
            }
            res.status(200).send(user);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
//app.post('/login', handlers.login);
//app.get('/', middleware.checkToken, handlers.index);
router.get('/', midleware.checkToken, function (req, res) {
    User.find({}, function (err, users) {
        if (err)
        {
            return res.status(500).send('There was a problem finding the users.');
        }
        console.log(users);
        if (Array.isArray(users) && users.length) {
            console.log(true);
            console.log(1);
        } else {
            console.log(false);
        }
        if (!users) {
            return res.status(404).send('No user found.');
        }
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).send('There was a problem finding the user.');
        }
        if (!user) {
            return res.status(404).send('No user found.');
        }
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).send('There was a problem deleting the user.');
        }
        res.status(200).send('User: ' + user.name + ' was deleted.');
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated user can put to this route
// router.put('/:id', /* VerifyToken, */ function (req, res) {
//     User.findByIdAndUpdate(req.params.id, req.body, {
//         new: true
//     }, function (err, user) {
//         if (err) {
//             return res.status(500).send('There was a problem updating the user.');
//         }
//         res.status(200).send(user);
//     });
// });

router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    // For the given username fetch user from DB
    let mockedUsername = 'admin';
    let mockedPassword = '123';

    if (username && password) {
        if (username === mockedUsername && password === mockedPassword) {
            let token = jwt.sign({
                username: username
            },
                config.secret, {
                    expiresIn: '24h' // expires in 24 hours
                }
            );
            // return the JWT token for the future API calls
            res.status(200).send({
                success: true,
                message: 'Authentication successful!',
                token: token
            });
        } else {
            res.status(403).send({
                success: false,
                message: 'Incorrect username or password'
            });
        }
    } else {
        res.status(400).send({
            success: false,
            message: 'Authentication failed! Please check the request'
        });
    }
});

module.exports = router;

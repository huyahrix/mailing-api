/**
 */
const express = require('express');
const router = express.Router();
const homeController = require('../api/controllers/homeController');
const emailController = require('../api/controllers/emailController');

let initRoutes = (app) => {

    router.get('/', homeController.getHome);
    router.get('/index.html', homeController.getHome);
    router.get('/home', homeController.getHome);

    router.get('/mail', emailController.mail);
    router.post('/mail/send-email', emailController.sendMail);

    return app.use('/', router);
};

module.exports = initRoutes;

/**
 * @copyright
 * @author ngochuy
 * @create 2020-09-05
 * @update 2020-09-05
 */
'use strict';
const multer = require('multer'); //middleware for handling multipart/form-data
const homeController = require('../api/controllers/homeController');
const emailController = require('../api/controllers/emailController');

const initRoutes = (app) => {
    /********************** home **********************/
    app.get('/', homeController.getHome);
    app.get('/index.html', homeController.getHome);
    app.get('/home', homeController.getHome);
    /********************** mail **********************/
    app.get('/mail', emailController.mail);
    app.post('/mail/send-email', multer().array('formData'), emailController.sendMail);
};

module.exports = initRoutes;

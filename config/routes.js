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

// var appRouter = function (app) {
//     app.get('/api/', function (req, res) {
//         res.status(200).send('Welcome to our restful API');
//     });
//     var UserController = require('../api/controllers/user/UserController');
//     app.use('/api/user', UserController);
//     var AuthController = require('../api/controllers/auth/AuthController');
//     app.use('/api/auth', AuthController);
//     var MongodbController = require('../api/controllers/mongodb/createDatabase');
//     app.use('/api/mongodb', MongodbController);
//     app.use('/api/mongodb', require('../api/controllers/mongodb/find'));
// };
// module.exports = appRouter;

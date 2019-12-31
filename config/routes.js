var appRouter = function (app) {

    app.get('/', function (req, res) {
        res.status(200).send('Welcome to our restful API');
    });

    var UserController = require('../api/controllers/user/UserController');
    app.use('/api/users', UserController);

    var AuthController = require('../api/controllers/auth/AuthController');
    app.use('/api/auth', AuthController);

    var MongodbController = require('../api/controllers/mongodb/createDatabase');
    app.use('/api/mongodb', MongodbController);
    app.use('/api/mongodb', require('../api/controllers/mongodb/find'));
};

module.exports = appRouter;

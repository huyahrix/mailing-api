var appRouter = function (app) {

    app.get("/", function (req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    var UserController = require('../user/UserController');
    app.use('/api/users', UserController);


    var AuthController = require('../auth/AuthController');
    app.use('/api/auth', AuthController);

    app.post('', (req, res) => {
        
    })
    
}

module.exports = appRouter;

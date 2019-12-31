/*
 * @Author: huyahrix
 * @Email: infjnite@gmail.com
 * @Date: 2019-12-19 11:09:37
 * @Last Modified by: huyahrix
 * @Last Modified time: 2019-12-31 14:04:36
 * @Description: Description
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));
/*
 In MongoDB we use the find and findOne methods to find data in a collection.
 Just like the SELECT statement is used to find data in a table in a MySQL database.
 The findOne() method returns the first occurrence in the selection.
 The first parameter of the findOne() method is a query object.
 In this example we use an empty query object, which selects all documents in a collection (but returns only the first document).
 */
const connectionString = 'mongodb+srv://sa:123@cluster0-sg9bv.mongodb.net';
const MongoClient = require('mongodb').MongoClient;
router.put('/find', function (req, res) {
    console.log('\x1b[42m',`${new Date().toUTCString()} || ${req.originalUrl}`,'\x1b[0m');
    (async () => {
        MongoClient.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function (err, client) {
            if (err) {
                console.error(err);
            }
            console.log('\x1b[44m','Database connected','\x1b[0m');
            var db = client.db('customers');
            try {
                var collections =  db.collection('customers').findOne({}, function (err, result) {
                    if (err) {
                        console.error(err);
                    }
                    console.log(result);
                    client.close();
                    res.status(200).send({data:result});
                });
                // console.log(`res => ${JSON.stringify(res)}`);
                // res.status(200).send(result);
            } catch (err) {
                console.error(err);
                res.status(500).send(err.stack);
            } finally {
                console.log(collections);
                // if (db) {
                //     client.close();
                // }
            }
        });
    })();
});
module.exports = router;

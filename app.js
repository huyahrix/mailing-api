/**
 * @copyright
 * @author ngochuy
 * @email  infjnite@gmail.com
 * @create 2020-09-05
 * @update 2020-09-05
 */
'use strict';

const config = require('./config/config');
const app = require('./config/express');
const mongo = require('./config/mongo');

mongo.connect();
app.set('config', config);

app.listen(config.port, () => {
    console.info('\x1b[32m',`Listening on port ${config.port}`,'\x1b[37m');
});

module.exports = app;

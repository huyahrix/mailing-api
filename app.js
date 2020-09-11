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

app.set('config', config);

app.listen(config.port, () => {
    console.info(`Listening on port ${config.port}`);
});

module.exports = app;

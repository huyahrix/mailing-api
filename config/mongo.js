/**
 * @copyright
 * @author ngochuy
 * @create 2020-09-05
 * @update 2020-09-05
 */
'use strict';

const mongoose = require('mongoose');

const mongo = {
    connect: () => {
        mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            if (process.env.NODE_ENV !== 'test') {
                console.log('\x1b[44m', 'Connected to ' + process.env.MONGODB_URL,'\x1b[0m','\n');
            }
        }).catch(err => {
            console.error('\x1b[31m', `Connect to mongodb failed(${process.env.MONGODB_URL})\n`, err.message, '\x1b[30m');
            //process.exit(1);
        });
    }
};
module.exports = mongo;

/**
 * @copyright
 * @author ngochuy
 * @create 2020-09-11
 * @update 2020-09-11
 */
'use strict';
const MailController = require('../api/controllers/MailController');

const initRoutes = (app) => {
    /********************** mail **********************/
    app.post('/', MailController);
};

module.exports = initRoutes;

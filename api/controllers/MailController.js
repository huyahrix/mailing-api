/**
 * @copyright
 * @author ngochuy
 * @create 2020-09-11
 * @update 2020-09-11
 */
'use strict';
const MailService = require('../services/MailService');
/**
 * POST/ User subscribe to App
 */
const MailController = {
    auth: async (req, res) => {
        MailService.authorzie();
        res.status(200).json({code:'200', message: 'email sent successfully' });
    },
    send: (req, res) => {
        MailService.sendEmail(req.query);
        res.status(200).json({ code: '200', message: 'email sent successfully' });
    }
};
module.exports = MailController;

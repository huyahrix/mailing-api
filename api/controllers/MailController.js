const MailService = require('../services/MailService');
const constant = require('../helpers/constant');
const utils = require('../utils');
/**
 * POST/ User subscribe to App
 */
const MailController = {
    auth: async(req, res) => {
        try {
            MailService.authorzie(req.query);
            res.status(200).json({ message: 'email sent successfully' });
        } catch (e) {
            utils.generateServerErrorCode(res, 500, e, constant.SOME_THING_WENT_WRONG);
        }
    },
    send: (req, res) => {
        try {
            MailService.sendEmail(req.query);
            res.status(200).json({ message: 'email sent successfully' });
        } catch (e) {
            utils.generateServerErrorCode(res, 500, e, constant.SOME_THING_WENT_WRONG);
        }
    }
};
module.exports = MailController;

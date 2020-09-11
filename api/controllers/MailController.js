const Mailing = require('../../index');
const constant = require('../helpers/constant');
const utils = require('../utils');
/**
 * POST/ User subscribe to App
 */
const mailingController = (req, res) => {
    try {
        Mailing.sendEmail(req.query);
        res.status(200).json({ message: 'email sent successfully' });
    } catch (e) {
        utils.generateServerErrorCode(res, 500, e, constant.SOME_THING_WENT_WRONG);
    }
};
module.exports = mailingController;

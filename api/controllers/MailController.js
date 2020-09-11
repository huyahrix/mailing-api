const Mailing = require('../../index');
const SOME_THING_WENT_WRONG = require('../helpers/constant');
const generateServerErrorCode = require('../utils').generateServerErrorCode;
/**
 * POST/ User subscribe to App
 */
const mailingController = (req, res) => {
    try {
        Mailing.sendEmail(req.query);
        res.status(200).json({ message: 'email sent successfully' });
    } catch (e) {
        generateServerErrorCode(res, 500, e, SOME_THING_WENT_WRONG);
    }
};
module.exports = mailingController;

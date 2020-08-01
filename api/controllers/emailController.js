//const mailer = require('../utils/mailer');
const path = require('path');

let sendMail = async (req, res) => {
    try {
        //const { to, subject, body } = req.body;

        //await mailer.sendMail(to, subject, body);

        res.send('<h3>Your email has been sent successfully.</h3>');
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

let mail = (req, res) => {
    return res.sendFile(path.join(`${__dirname}/../views/mail.html`));
};

module.exports = {
    sendMail: sendMail,
    mail: mail
};

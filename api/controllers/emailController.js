const mailer = require('../utils/mailer');
const path = require('path');

let sendMail = async (req, res) => {
    try {
    // Lấy data truyền lên từ form phía client
        const { to, subject, body } = req.body;

        // Thực hiện gửi email
        await mailer.sendMail(to, subject, body);

        // Quá trình gửi email thành công thì gửi về thông báo success cho người dùng
        res.send('<h3>Your email has been sent successfully.</h3>');
    } catch (error) {
    // Nếu có lỗi thì log ra để kiểm tra và cũng gửi về client
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

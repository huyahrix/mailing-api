const mailnotifier = require('mail-notifier');

var imap = {
    user: 'mocking.bird.huym@gmail.com',
    password: 'gtnntqhtvkn',
    host: 'imap.gmail.com',
    port: 993, // imap port
    tls: true,// use secure connection
    tlsOptions: { rejectUnauthorized: false }
};
const notifier = mailnotifier(imap);

notifier.on('mail', function (mail) {
    console.log('===== mail-notifier => mail =====');
    if (!mail){
        console.log('mail is Undefine');
        return;
    }
    if (mail.html) {
        mail.html = require('html-to-text').fromString(mail.html);
    }
    //mail.headers = require('html-to-text').fromString(mail.headers);
    console.log(mail);
});

notifier.on('connected', function () {
    console.log('mail-notifier is connected successfully');
});

notifier.on('end', function () {
    console.log('...notification ended...');
});

notifier.on('error', function (err) {
    console.log('...notification error : %s', err);
});

notifier.start();
console.log('\x1b[44m','mail-notifier is connected successfully','\x1b[0m');

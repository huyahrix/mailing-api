/**
 * @copyright
 * @author ngochuy
 * @create 2020-09-05
 * @update 2020-09-05
 */
'use strict';
const mailnotifier = require('mail-notifier');

const maillistener = {
    start: () => {
        const imap = {
            user: 'mocking.bird.huym@gmail.com',
            password: 'gtnntqhtvkn',
            host: 'imap.gmail.com',
            port: 993, // imap port
            tls: true,// use secure connection
            tlsOptions: { rejectUnauthorized: false }
        };
        const notifier = mailnotifier(imap);

        notifier.on('connected', function () {
            console.log('\x1b[44m', 'Mail notifier is connected successfully', '\x1b[0m');
        });

        notifier.on('mail', function (mail) {
            console.log('===== mailnotifier => mail =====');
            if (!mail) {
                console.log('mail is Undefine');
                return;
            }
            if (mail.html) {
                mail.html = require('html-to-text').fromString(mail.html);
            }
            delete mail.headers;
            console.log(mail);
        });

        notifier.on('end', function () {
            console.log('...notification ended...');
            notifier.start();
        });

        notifier.on('error', function (err) {
            console.log('...notification error : %s', err);
        });

        notifier.start();
    }
};
module.exports = maillistener;

'use strict';
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const { google } = require('googleapis');
const { invalid } = require('moment');
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS,
} = process.env;
const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    OAUTH_PLAYGROUND
);
const TEMPLATES = {
    subscribe: {
        fileName: 'subscribe.ejs',
        subject: '[Diginet Inc.] Welcome to Diginet Inc.',
    },
};

const MailService = {
    authorzie: async () => {
        const scopes = ['https://mail.google.com'];
        const url = oauth2Client.generateAuthUrl({
            // 'online' (default) or 'offline' (gets refresh_token)
            access_type: 'offline',

            // If you only need one scope you can pass it as a string
            scope: scopes
        });
        console.log('oauth2Client.generateAuthUrl: ', url);

        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('input code ',async (code) => {
            if (!code) {
                console.log('invalid code');
                return;
            }
            const tokens = await oauth2Client.getToken(code).catch(err => {
                console.log('oauth2Client.getToken | error :', err.message);
            });
            if(!tokens){
                return;
            }
            try {
                oauth2Client.setCredentials(tokens.tokens);
            } catch (error) {
                console.log(error);
                return false;
            }
            console.log(tokens);
            rl.close();
        });

        oauth2Client.on('tokens', (tokens) => {
            if (tokens.refresh_token) {
                // store the refresh_token in my database!
                console.log(tokens.refresh_token);
            }
            console.log(tokens.access_token);
        });
    },
    /**`
     * Send Email
     */
    sendEmail: async (data) => {
        console.log(oauth2Client);
        oauth2Client.setCredentials({
            refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
        });
        const accessToken = oauth2Client.getAccessToken();
        const smtpTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: SENDER_EMAIL_ADDRESS,
                clientId: MAILING_SERVICE_CLIENT_ID,
                clientSecret: MAILING_SERVICE_CLIENT_SECRET,
                refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
                accessToken,
            },
        });
        const filePath = require('path').normalize(__dirname + '/../views/template/subscribe.ejs');
        console.log(filePath);
        ejs.renderFile(filePath, data, {}, (e, content) => {
            if (e) {
                console.log('ejs.renderFile => error: ', e);
                return e;
            }
            const mailOptions = {
                from: SENDER_EMAIL_ADDRESS,
                to: data.email,
                subject: TEMPLATES[data.template].subject,
                html: content,
            };
            console.log('smtpTransport:   ==== ',smtpTransport);
            try {
                smtpTransport.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        console.log(err);
                        return err;
                    }
                    console.log(info);
                    return info;
                });
            } catch (error) {
                console.log(error);
            }
        });
    },
};
module.exports = MailService;

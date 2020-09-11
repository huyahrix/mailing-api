'use strict';
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS,
} = process.env;
const Mailing = {};
const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  OAUTH_PLAYGROUND
);
const TEMPLATES = {
    subscribe: {
        fileName: 'subscribe.ejs',
        subject: '[ABC Inc.] Welcome to ABC Inc.',
    },
};


const scopes = ['https://mail.google.com'];
const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',

    // If you only need one scope you can pass it as a string
    scope: scopes
});

console.log(url);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    async function start() {
        const {tokens} = await oauth2Client.getToken(code);
        console.log( {tokens} );
        return  {tokens};
    }
    const tokens = start();
    oauth2Client.setCredentials(tokens);
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


/**
 * Send Email
 */
Mailing.sendEmail = data => {
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
    console.log('__dirname', __dirname);
    const filePath = require('path').normalize(__dirname + '/api/views/template/subscribe.ejs');
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
        smtpTransport.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
                return err;
            }
            console.log(info);
            return info;
        });
    });
};
module.exports = Mailing;

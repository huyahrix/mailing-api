/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/01/09 11:51
 * @update 2019/01/09 11:51
 */
'use strict';

const encryption = require('./encryption');
const auth = (req) => {

    if (!req || !req.headers || !req.headers.token) {
        return null;
    }

    const token = req.headers.token;
    if (!token || token.length < 30) {
        return null;
    }

    // Check token validated
    const authData = encryption.decryptJWT(token);
    if (!authData || !authData.id) {
        return null;
    }

    return authData;
};

module.exports = auth;

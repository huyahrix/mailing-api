/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/05/28 11:15
 * @update 2019/05/28 11:15
 */
'use strict';

const isEmail = (email) => {
    try {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    } catch (e) {
        sails.log.warn(e);
        return false;
    }
};

module.exports = isEmail;

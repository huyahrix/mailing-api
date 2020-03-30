/**
 * @copyright 2017 @ Tech Seed Labs
 * @author rocachien
 * @create 2017/10/16 17:05
 * @update 2017/10/16 17:05
 * @file utils/setting.js
 */
'use strict';

const getSetting = (name) => {
    const settings = sails.settings || [];

    for (let i = 0; i < settings.length; i++) {
        let set = settings[i];

        if(set.name === name) {
            return set.value;
        }
    }

    return null;
};

module.exports = getSetting;

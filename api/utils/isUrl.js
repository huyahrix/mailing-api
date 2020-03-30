/**
 * @copyright 2019 © DigiNet
 * @author hoangtuan
 * @create 2019/10/07 15:12
 * @update 2019/10/07 15:12
 */
'use strict';

// Valid url: https://www.diginet.net | http://www.diginet.com | http://diginet.com | www.diginet.com | https://www.z.co | http://www.z.co | http://z.co
// www.z.co | www.mp3.com | www.foufos.gr | http://werer.gr | http://www.foufos.gr/kino | http://foufos.gr | https://www.foufos.gr | http://www.foufos.gr
// Invalid url: www.mp3#.com | http://foufos | http://www.foufos | foufos.gr || www.-foufos.gr | www.foufos-.gr | www.foufos

const isUrl = (url) => {
    try {
        const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        const regex = new RegExp(expression);
        return regex.test(String(url).toLowerCase());
    } catch (e) {
        sails.log.warn(e);
        return false;
    }
};

module.exports = isUrl;

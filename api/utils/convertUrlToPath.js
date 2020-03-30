/**
 * @copyright 2019 © DigiNet
 * @author hoangtuan
 * @create 2019/11/05 14:04
 * @update 2019/11/05 14:04
 */
'use strict';

const path  = require('path');
const convertUrlToPath=(fileURL, prefix) => {
    if( !fileURL ){
        return false;
    }
    const rootFolder    = path.dirname(require.main.filename)+`/${prefix}/`;
    const webURL        = sails.config.webUrl;
    let staticPath      = webURL;
    const validURL      = fileURL.indexOf(webURL,0);
    if( validURL !== -1 ){
        staticPath = fileURL.replace( webURL, rootFolder );
    }
    return path.resolve(staticPath);
};

module.exports = convertUrlToPath;

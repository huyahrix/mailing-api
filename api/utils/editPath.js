/**
 * @copyright 2019 © DigiNet
 * @author kimlong
 * @create 2019/06/4 17:24
 * @update 2019/06/4 17:24
 */
'use strict';

const replacePath = (path) => {
    const reg = new RegExp('\\\\', 'g');
    return path.replace(reg, '/');
};

const checkFirstWord = (path) => {
    if (path.length>0){
        if(path.charAt(0)!=='/' && path.charAt(0)!=='\\'){
            path = '\\' + path;
        }
    }
    return replacePath(path);
};

module.exports = {
    replacePath: replacePath,
    checkFirstWord: checkFirstWord
};

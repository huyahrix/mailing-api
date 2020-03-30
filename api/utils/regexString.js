/**
 * @copyright 2019 @ DigiNet
 * @author hoangtuan
 * @create 2019/09/11 09:27
 * @update 2019/09/11 09:27
 */
'use strict';
const regexString = {
    stripTags: (richText) => {
        if( !richText ){
            return false;
        }
        let htmlBlock   = ['h1','h2','h3','h4','h5','h6','p','ul','ol','li','dl','pre','hr','blockquote','address','div'].join('|');
        let htmlRegex   = new RegExp(`<[^>]*>`,'gm');
        let beginRegex  = new RegExp(`<[${htmlBlock}]*>`,'gm');
        let endRegex    = new RegExp(`<[/][${htmlBlock}]*>`,'gm');
        return richText.replace(endRegex,'\r\n').replace(beginRegex,'').replace(htmlRegex,'');
    },
};
module.exports = regexString;

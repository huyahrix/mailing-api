/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/08/19 11:15
 * @update 2019/08/19 11:15
 */
'use strict';

const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const decrypt = (text) => {
    const key = crypto.createDecipher('aes-256-cbc', sails.config.secret + '@!4#');
    const str = key.update(text, 'hex', 'utf8');

    return str + key.final('utf8');
};

const encrypt = (text) => {
    const key = crypto.createCipher('aes-256-cbc', sails.config.secret + '@!4#');
    const str = key.update(text, 'utf8', 'hex');

    return str + key.final('hex');
};

const encryptJWT = (tokenData, expiry) => {
    expiry = expiry ? expiry : '30d';

    return jwt.sign(tokenData, sails.config.secret + '@!5#', { algorithm: 'HS256', expiresIn: expiry});
};

const decryptJWT = (tokenData) => {
    try {
        return jwt.verify(tokenData, sails.config.secret + '@!5#');
    } catch(error) {
        sails.log.warn('Token Error: ' + JSON.stringify(error));
    }
};
const unichr = (n, value) => {
    const ascii = {
        128: '€',
        129: '',
        130: '‚',
        131: 'ƒ',
        132: '„',
        133: '…',
        134: '†',
        135: '‡',
        136: 'ˆ',
        137: '‰',
        138: 'Š',
        139: '‹',
        140: 'Œ',
        141: '',
        142: 'Ž',
        143: '',
        144: '',
        145: '‘',
        146: '’',
        147: '“',
        148: '”',
        149: '•',
        150: '–',
        151: '—',
        152: '˜',
        153: '™',
        154: 'š',
        155: '›',
        156: 'œ',
        157: '',
        158: 'ž',
        159: 'Ÿ',
        160: ' ',
        161: '¡',
        162: '¢',
        163: '£',
        164: '¤',
        165: '¥',
        166: '¦',
        167: '§',
        168: '¨',
        169: '©',
        170: 'ª',
        171: '«',
        172: '¬',
        173: '­',
        174: '®',
        175: '¯',
        176: '°',
        177: '±',
        178: '²',
        179: '³',
        180: '´',
        181: 'µ',
        182: '¶',
        183: '·',
        184: '¸',
        185: '¹',
        186: 'º',
        187: '»',
        188: '¼',
        189: '½',
        190: '¾',
        191: '¿',
        192: 'À',
        193: 'Á',
        194: 'Â',
        195: 'Ã',
        196: 'Ä',
        197: 'Å',
        198: 'Æ',
        199: 'Ç',
        200: 'È',
        201: 'É',
        202: 'Ê',
        203: 'Ë',
        204: 'Ì',
        205: 'Í',
        206: 'Î',
        207: 'Ï',
        208: 'Ð',
        209: 'Ñ',
        210: 'Ò',
        211: 'Ó',
        212: 'Ô',
        213: 'Õ',
        214: 'Ö',
        215: '×',
        216: 'Ø',
        217: 'Ù',
        218: 'Ú',
        219: 'Û',
        220: 'Ü',
        221: 'Ý',
        222: 'Þ',
        223: 'ß',
        224: 'à',
        225: 'á',
        226: 'â',
        227: 'ã',
        228: 'ä',
        229: 'å',
        230: 'æ',
        231: 'ç',
        232: 'è',
        233: 'é',
        234: 'ê',
        235: 'ë',
        236: 'ì',
        237: 'í',
        238: 'î',
        239: 'ï',
        240: 'ð',
        241: 'ñ',
        242: 'ò',
        243: 'ó',
        244: 'ô',
        245: 'õ',
        246: 'ö',
        247: '÷',
        248: 'ø',
        249: 'ù',
        250: 'ú',
        251: 'û',
        252: 'ü',
        253: 'ý',
        254: 'þ',
        255: 'ÿ'
    };

    if (value !== '') {
        return Object.keys(ascii).find(key => ascii[key] === value);
    }
    else {
        return ascii[n];
    }
};
const chr = (code) => {
    if (code > 0xFFFF) {
        code -= 0x10000;
        return String.fromCharCode(0xD800 + (code >> 10), 0xDC00 + (code & 0x3FF));
    }
    return String.fromCharCode(code);
};
const ord = (string) => {
    let str = string + '';
    let code = str.charCodeAt(0);

    if (code >= 0xD800 && code <= 0xDBFF) {
        let hi = code;
        if (str.length === 1) {
            return code;
        }
        let low = str.charCodeAt(1);
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (code >= 0xDC00 && code <= 0xDFFF) {
        return code;
    }

    return code;
};
const ordutf8 = (string) =>{
    let codetemp = 0;
    let bytesnumber = 0;
    let code = ord(string);

    if (code >= 128) {
        if (code < 224) {
            bytesnumber = 2;
        }
        else if (code < 240) {
            bytesnumber = 3;
        }
        else if (code < 248) {
            bytesnumber = 4;
        }

        codetemp = code - 192 - (bytesnumber > 2 ? 32 : 0) - (bytesnumber > 3 ? 16 : 0);
        for (let i = 2; i <= bytesnumber; i++) {
            const code2 = ord(string) - 128;
            codetemp = codetemp * 64 + code2;
        }
        code = codetemp;
    }

    return code;
};
const encryptPHP = (str) => {
    if (!str || str.length === 0) {
        return '';
    }

    const len = str.length;
    const arr = str.split('');
    const arr1 = str.split('');

    for (let i = 0; i < len; i++) {
        const iord = ord(arr1[i]) * 2 + 3;

        if (iord > 127) {
            arr[len - (i + 1)] = unichr(iord, '');
        }
        else {
            arr[len - (i + 1)] = chr(iord);
        }
    }

    return arr.join('');
};

const decryptPHP = (str) => {
    if (!str || str.length === 0) {
        return '';
    }

    const len = str.length;
    const arr = str.split('');
    const arr1 = str.split('');

    for (let i = 0; i < len; i++) {
        if (arr1[i] !== '') {
            const key = unichr(0, arr1[i]);

            if (!key) {
                const ord8 = ordutf8(arr1[i]);
                const iord = (ord8 - 3) * 0.5;

                if (iord > 127)
                {
                    arr[len - (i + 1)] = unichr(iord, '');
                } else {
                    arr[len - (i + 1)] = chr(iord);
                }
            } else {
                arr[len - (i + 1)] = chr((key - 3) / 2);
            }

        }
    }

    //lấy mảng đưa vào chuỗi lại.
    let outstr = '';
    for (let i = 0; i < len; i++) {
        outstr = outstr + arr[i];
    }

    return outstr;
};

module.exports = {
    decrypt: decrypt,
    encrypt: encrypt,
    decryptJWT: decryptJWT,
    encryptJWT: encryptJWT,
    encryptPHP: encryptPHP,
    decryptPHP: decryptPHP
};

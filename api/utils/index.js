/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/05/28 11:15
 * @update 2019/04/15 16:40
 */
'use strict';

const isJsonString          = require('./isJsonString');
const isDateISO             = require('./isDateISO');
const isEmail               = require('./isEmail');
const parseTimeToSecond     = require('./parseTimeToSecond');
const randString            = require('./randString');
const getSetting            = require('./getSetting');
const addZero               = require('./addZero');
const stringToMinutes       = require('./stringToMinutes');
const numb                  = require('./numb');
const encryption            = require('./encryption');
const auth                  = require('./auth');
const ExcelReport           = require('./excel-report');
const {ExcelTemplate,ExcelTemplateByBinary}       = require('./excel-template');
const sql                   = require('./sql');
const convertArrayToString  = require('./convertArrayToString');
const editPath              = require('./editPath');
const isWhereParam          = require('./isWhereParam');
const specialCharacter      = require('./specialCharacter');
const dateTime              = require('./dateTime');
const getMimeType           = require('./getMimeType');
const isUrl                 = require('./isUrl');
const convertUrlToPath      = require('./convertUrlToPath');
const checkFile             = require('./checkFile');
const readExcel             = require('./readExcel');
const regexString           = require('./regexString');

const Utils = {
    auth                    :     auth,
    ExcelReport             :     ExcelReport,
    ExcelTemplate           :     ExcelTemplate,
    ExcelTemplateByBinary   :     ExcelTemplateByBinary,
    isJsonString            :     isJsonString,
    parseTimeToSecond       :     parseTimeToSecond,
    randString              :     randString,
    getSetting              :     getSetting,
    addZero                 :     addZero,
    stringToMinutes         :     stringToMinutes,
    isEmail                 :     isEmail,
    isDateISO               :     isDateISO,
    isInt                   :     numb.isInt,
    intLimit                :     numb.intLimit,
    decrypt                 :     encryption.decrypt,
    encrypt                 :     encryption.encrypt,
    decryptJWT              :     encryption.decryptJWT,
    encryptJWT              :     encryption.encryptJWT,
    encryptPHP              :     encryption.encryptPHP,
    decryptPHP              :     encryption.decryptPHP,
    sqlString               :     sql.sqlString,
    sqlDatetime             :     sql.sqlDatetime,
    formatParam             :     sql.formatParam,
    convertArrayToString    :     convertArrayToString,
    isWhereParam            :     isWhereParam,
    replacePath             :     editPath.replacePath,
    checkFirstWord          :     editPath.checkFirstWord,
    specialCharacter        :     specialCharacter,
    dateTime                :     dateTime,
    getMimeType             :     getMimeType,
    isUrl                   :     isUrl,
    convertUrlToPath        :     convertUrlToPath,
    checkFile               :     checkFile,
    readExcel               :     readExcel,
    regexString             :     regexString,
};

module.exports = Utils;

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

let Utils = {
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

const sha256 = require('sha256');
const check = require('express-validator').check;

// import {
//     PASSWORD_IS_EMPTY,
//     PASSWORD_LENGTH_MUST_BE_MORE_THAN_8,
//     EMAIL_IS_EMPTY,
//     EMAIL_IS_IN_WRONG_FORMAT,
// } from './constant';

const message = require('../helpers/constant');

Utils.generateHashedPassword = password => sha256(password);

Utils.generateServerErrorCode = function generateServerErrorCode(
  res,
  code,
  fullError,
  msg,
  location = 'server'
) {
    const errors = {};
    errors[location] = {
        fullError,
        msg,
    };

    return res.status(code).json({
        code,
        fullError,
        errors,
    });
};
// ================================
// Validation:
// Handle all validation check for the server
// ================================

Utils.registerValidation = [
    check('email')
    .exists()
    .withMessage(message.EMAIL_IS_EMPTY)
    .isEmail()
    .withMessage(message.EMAIL_IS_IN_WRONG_FORMAT),
    check('password')
    .exists()
    .withMessage(message.PASSWORD_IS_EMPTY)
    .isLength({ min: 8 })
    .withMessage(message.PASSWORD_LENGTH),
];

Utils.loginValidation = [
    check('email')
    .exists()
    .withMessage(message.EMAIL_IS_EMPTY)
    .isEmail()
    .withMessage(message.EMAIL_IS_IN_WRONG_FORMAT),
    check('password')
    .exists()
    .withMessage(message.PASSWORD_IS_EMPTY)
    .isLength({ min: 8 })
    .withMessage(message.PASSWORD_LENGTH),
];

module.exports = Utils;

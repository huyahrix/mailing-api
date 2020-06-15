// /**
//  * @copyright 2019 © DigiNet
//  * @author rocachien
//  * @create 2019/04/24 17:24
//  * @update 2019/04/24 17:24
//  */
// 'use strict';
// const fs            = require('fs');
// // const request       = require('request');
// const XlsxTemplate  = require('xlsx-template');

// /**
//  *
//  * @apiParam {String}     url       The the url hosted in this server where upload dir is existed is required.
//  * @apiParam {String}     data      The The data to fill in the excel template is required.
//  * @apiParam {String}     sheet     The sheet number is optional.
//  * @returns {Promise<*>}
//  */
// const ExcelTemplate = async (options) => {
//     sails.log.info('================================ ExcelTemplate -> options: ================================');
//     // sails.log.info(options);
//     return new Promise( async(resolve, reject) => {
//         if (!options || !options.url || !options.data) {
//             return reject({code: 'EXP001', message: 'Export data input is required.'});
//         }
//         let template    = null;
//         try{
//             const body      = fs.readFileSync( options.url );
//             const data      = new Buffer(body, 'binary');
//             // sails.log.info('data',data);
//             template        = new XlsxTemplate(data);
//             // sails.log.info('template',template);
//         }catch (e) {
//             sails.log.warn(e);
//             return reject({code: 'EXP005', message: 'The template file is not existed or not in xlsx format.', error: e});
//         }

//         try {
//             if (template) {
//                 const sheet = options.sheet ? options.sheet : 1;
//                 template.substitute(sheet, options.data);
//             }
//         } catch (e) {
//             sails.log.warn(e);
//             return reject({code: 'EXP003', message: 'Substitute excel error.', error: e});
//         }

//         // Get binary data
//         const result = await template.generate();
//         // console.log('==== ExportService.generate -> result: ', result);

//         if (result) {
//             return resolve(result);
//         } else {
//             return reject({code: 'EXP004', message: 'Generate excel error.'});
//         }

//     });
// };

// /**
//  *
//  * @apiParam {String}     url       The the url hosted in this server where upload dir is existed is required.
//  * @apiParam {String}     data      The The data to fill in the excel template is required.
//  * @apiParam {String}     sheet     The sheet number is optional.
//  * @returns {Promise<*>}
//  */
// const ExcelTemplateByBinary = async (options) => {
//     sails.log.info('================================ ExcelTemplateByBinary -> options: ================================');
//     // sails.log.info(options);

//     return new Promise( async(resolve, reject) => {
//         if (!options || !options.data) {
//             return reject({code: 'EXP001', message: 'Export data input is required.'});
//         }

//         let template = null;

//         try {
//             const data = new Buffer(options.body, 'binary');
//             template = new XlsxTemplate(data);
//         } catch (e) {
//             sails.log.warn(e);
//             return reject({code: 'EXP005', message: 'The template file is not existed or not in xlsx format.', error: e});
//         }

//         try {
//             if (template) {
//                 const sheet = options.sheet ? options.sheet : 1;
//                 console.log('==================options.data=',options.data);
//                 template.substitute(sheet, options.data);
//             }
//         } catch (e) {
//             sails.log.warn(e);
//             return reject({code: 'EXP003', message: 'Substitute excel error.', error: e});
//         }

//         // Get binary data
//         const result = await template.generate();
//         // console.log('==== ExportService.generate -> result: ', result);

//         if (result) {
//             return resolve(result);
//         } else {
//             return reject({code: 'EXP004', message: 'Generate excel error.'});
//         }
//     });
// };

// module.exports = {
//     ExcelTemplate:ExcelTemplate,
//     ExcelTemplateByBinary:ExcelTemplateByBinary
// };

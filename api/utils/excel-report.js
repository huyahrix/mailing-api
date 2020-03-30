/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/08/06 19:14
 * @update 2019/08/06 19:14
 */
'use strict';

const request                       = require('request');
const ExcelReportTemplate           = require('excel-report-template');
const cloudmersiveConvertApiClient  = require('cloudmersive-convert-api-client');

/**
 *
 * @apiParam {String}     url       The the url hosted in this server where upload dir is existed is required.
 * @apiParam {String}     data      The The data to fill in the excel template is required.
 * @apiParam {String}     sheet     The sheet number is optional.
 * @returns {Promise<*>}
 */
const ExcelReport = async (options) => {
    sails.log.info('===== ExcelReport -> options: =====');
    // sails.log.info(options);
    const isPDF = options.isPDF;
    return new Promise( (resolve, reject) => {
        if (!options || !options.url || !options.data) {
            return reject({code: 'EXP001', message: 'Export data input is required.'});
        }

        request({url: options.url, encoding:null, strictSSL: false}, function (error, response, body) {
            if(error) {
                sails.log.warn(error);
                return reject({code: 'EXP002', message: 'Read file error.', error: error});
            }

            let template = null;

            try {
                const data      = new Buffer(body, 'binary');
                template        = new ExcelReportTemplate(data);
            } catch (e) {
                sails.log.warn(e);
                return reject({code: 'EXP005', message: 'The template file is not existed or not in xlsx format.', error: e});
            }

            try {
                if (template) {
                    const sheet = options.sheet ? options.sheet : 1;
                    template.substitute(sheet, options.data);
                }
            } catch (e) {
                sails.log.warn(e);
                return reject({code: 'EXP003', message: 'Substitute excel error.', error: e});
            }

            // Get binary data
            const result = template.generate();

            if(isPDF==='1'){
                const resultPDF = new Buffer(result, 'binary');
                const defaultClient = cloudmersiveConvertApiClient.ApiClient.instance;
                // Configure API key authorization: Apikey
                const Apikey = defaultClient.authentications['Apikey'];
                Apikey.apiKey = sails.config.apiKeyPDF;
                const apiInstance = new cloudmersiveConvertApiClient.ConvertDocumentApi();
                const callback = function(error, data) {
                    if (error) {
                        console.error(error);
                    } else {
                        if (data) {
                            return resolve(data);
                        } else {
                            return reject({code: 'EXP004', message: 'Generate excel error.'});
                        }
                    }
                };
                apiInstance.convertDocumentXlsxToPdf(resultPDF, callback);
            }else{
                if (result) {
                    return resolve(result);
                } else {
                    return reject({code: 'EXP004', message: 'Generate excel error.'});
                }
            }
        });
    });
};

module.exports = ExcelReport;

'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /settlementWindow/{settlementWindowId}/get
 */
module.exports = {
    /**
     * summary: Returns a settlement window record per id.
     * description: 
     * parameters: settlementWindowId
     * produces: 
     * responses: 200, 400, 401, 404
     * operationId: getSettlementWindowRecord
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementWindow/{settlementWindowId}/get',
                operation: 'get',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementWindow/{settlementWindowId}/get',
                operation: 'get',
                response: '400'
            }, callback);
        },
        401: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementWindow/{settlementWindowId}/get',
                operation: 'get',
                response: '401'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementWindow/{settlementWindowId}/get',
                operation: 'get',
                response: '404'
            }, callback);
        }
    }
};

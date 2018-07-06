'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /settlementWindow/all
 */
module.exports = {
    /**
     * summary: List all settlement window records
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, 400, 401, 404
     * operationId: getSettlementWindows
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementWindow/all',
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
                path: '/settlementWindow/all',
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
                path: '/settlementWindow/all',
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
                path: '/settlementWindow/all',
                operation: 'get',
                response: '404'
            }, callback);
        }
    }
};

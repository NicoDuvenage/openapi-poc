'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /transfers
 */
module.exports = {
    /**
     * summary: List all transfers
     * description: 
     * parameters: 
     * produces: 
     * responses: default
     * operationId: getTransfers
     */
    get: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/transfers',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};

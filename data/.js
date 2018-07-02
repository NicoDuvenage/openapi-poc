'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /
 */
module.exports = {
    /**
     * summary: Status of ledger admin api
     * description: 
     * parameters: 
     * produces: 
     * responses: default
     * operationId: get
     */
    get: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};

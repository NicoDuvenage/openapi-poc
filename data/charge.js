'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /charge
 */
module.exports = {
    /**
     * summary: List all charges
     * description: 
     * parameters: 
     * produces: 
     * responses: default
     * operationId: getCharge
     */
    get: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/charge',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Create a new charge
     * description: 
     * parameters: body
     * produces: 
     * responses: default
     * operationId: postCharge
     */
    post: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/charge',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};

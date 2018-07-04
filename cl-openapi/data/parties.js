'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /parties
 */
module.exports = {
    /**
     * summary: List party
     * description: 
     * parameters: 
     * produces: 
     * responses: default
     * operationId: getParties
     */
    get: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/parties',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Create new party
     * description: 
     * parameters: body
     * produces: 
     * responses: default
     * operationId: postParties
     */
    post: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/parties',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};

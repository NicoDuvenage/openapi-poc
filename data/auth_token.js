'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /auth_token
 */
module.exports = {
    /**
     * summary: Get a token for admin authentication
     * description: 
     * parameters: body
     * produces: 
     * responses: default
     * operationId: postAuth_token
     */
    post: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/auth_token',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};

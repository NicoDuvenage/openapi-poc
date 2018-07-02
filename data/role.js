'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /role
 */
module.exports = {
    /**
     * summary: List all role
     * description: 
     * parameters: 
     * produces: 
     * responses: default
     * operationId: getRole
     */
    get: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/role',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Create a new role
     * description: 
     * parameters: body
     * produces: 
     * responses: default
     * operationId: postRole
     */
    post: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/role',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};

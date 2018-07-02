'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /permissions
 */
module.exports = {
    /**
     * summary: List available permissions
     * description: 
     * parameters: 
     * produces: 
     * responses: default
     * operationId: getPermissions
     */
    get: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/permissions',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};

'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /charge/{name}
 */
module.exports = {
    /**
     * summary: Update a charge
     * description: 
     * parameters: name, body
     * produces: 
     * responses: default
     * operationId: putChargeName
     */
    put: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/charge/{name}',
                operation: 'put',
                response: 'default'
            }, callback);
        }
    }
};

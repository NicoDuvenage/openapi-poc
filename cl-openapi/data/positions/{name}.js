'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /positions/{name}
 */
module.exports = {
    /**
     * summary: View position for an Participant
     * description: 
     * parameters: name
     * produces: 
     * responses: default
     * operationId: getPositionsName
     */
    get: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/positions/{name}',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};

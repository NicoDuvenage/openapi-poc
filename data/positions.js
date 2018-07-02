'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /positions
 */
module.exports = {
    /**
     * summary: List positions for all Participants
     * description: 
     * parameters: 
     * produces: 
     * responses: default
     * operationId: getPositions
     */
    get: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/positions',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};

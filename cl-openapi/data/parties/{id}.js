'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /parties/{id}
 */
module.exports = {
    /**
     * summary: View party details
     * description: 
     * parameters: id
     * produces: 
     * responses: default
     * operationId: getPartiesId
     */
    get: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/parties/{id}',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Update party details
     * description: 
     * parameters: id, body
     * produces: 
     * responses: default
     * operationId: putPartiesId
     */
    put: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/parties/{id}',
                operation: 'put',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Delete party
     * description: 
     * parameters: id
     * produces: 
     * responses: default
     * operationId: deletePartiesId
     */
    delete: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/parties/{id}',
                operation: 'delete',
                response: 'default'
            }, callback);
        }
    }
};

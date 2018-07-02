'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /parties/{id}/role
 */
module.exports = {
    /**
     * summary: Get party role
     * description: 
     * parameters: id
     * produces: 
     * responses: default
     * operationId: getPartiesIdRole
     */
    get: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/parties/{id}/role',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Update party role
     * description: 
     * parameters: id, body
     * produces: 
     * responses: default
     * operationId: postPartiesIdRole
     */
    post: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/parties/{id}/role',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};

'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /participants/{name}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: name, body
     * produces: 
     * responses: default
     * operationId: getParticipantsName
     */
    // get: {
       
    //     default: function (req, res, callback) {
    //         /**
    //          * Using mock data generator module.
    //          * Replace this by actual data for the api.
    //          */
    //         Mockgen().responses({
    //             path: '/participants/{name}',
    //             operation: 'get',
    //             response: 'default'
    //         }, callback);
    //     }
        
    // },
    /**
     * summary: 
     * description: 
     * parameters: name, body
     * produces: 
     * responses: default
     * operationId: putParticipantsName
     */
    put: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/{name}',
                operation: 'put',
                response: 'default'
            }, callback);
        }
    }
};

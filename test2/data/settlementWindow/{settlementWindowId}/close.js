'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /settlementWindow/{settlementWindowId}/close
 */
module.exports = {
    /**
     * summary: Close a settlement window with given id
     * description: 
     * parameters: settlementWindowId, body
     * produces: 
     * responses: 200
     * operationId: closeSettlementWindow
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementWindow/{settlementWindowId}/close',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};

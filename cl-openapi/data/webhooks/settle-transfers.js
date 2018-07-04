'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /webhooks/settle-transfers
 */
module.exports = {
    /**
     * summary: Settle fulfilled transfers
     * description: 
     * parameters: 
     * produces: 
     * responses: default
     * operationId: postWebhooksSettletransfers
     */
    post: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/webhooks/settle-transfers',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};

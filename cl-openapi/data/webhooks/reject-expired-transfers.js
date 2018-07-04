'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /webhooks/reject-expired-transfers
 */
module.exports = {
    /**
     * summary: Reject expired transfers
     * description: 
     * parameters: 
     * produces: 
     * responses: default
     * operationId: postWebhooksRejectexpiredtransfers
     */
    post: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/webhooks/reject-expired-transfers',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};

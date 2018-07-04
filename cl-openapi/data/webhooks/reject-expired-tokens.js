'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /webhooks/reject-expired-tokens
 */
module.exports = {
    /**
     * summary: Reject expired tokens
     * description: 
     * parameters: 
     * produces: 
     * responses: default
     * operationId: postWebhooksRejectexpiredtokens
     */
    post: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/webhooks/reject-expired-tokens',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
 
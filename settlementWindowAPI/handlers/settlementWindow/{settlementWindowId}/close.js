'use strict';

const Boom = require('boom');

/**
 * Operations on /settlementWindow/{settlementWindowId}/close
 */
module.exports = {
    /**
     * summary: Close a settlement window with given id
     * description: 
     * parameters: settlementWindowId
     * produces: 
     * responses: 200
     */
    post: function closeSettlementWindow(request, h) {
        return Boom.notImplemented();
    }
};

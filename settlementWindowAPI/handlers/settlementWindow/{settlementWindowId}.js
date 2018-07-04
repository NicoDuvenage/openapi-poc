'use strict';

const Boom = require('boom');

/**
 * Operations on /settlementWindow/{settlementWindowId}
 */
module.exports = {
    /**
     * summary: Returns a settlement window record per id.
     * description: 
     * parameters: settlementWindowId
     * produces: 
     * responses: 200, 400, 401, 404
     */
    get: function getSettlementWindowRecord(request, h) {
        return Boom.notImplemented();
    }
};

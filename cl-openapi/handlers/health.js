'use strict';

const Boom = require('boom');

/**
 * Operations on /health
 */
module.exports = {
    /**
     * summary: Status of ledger admin api
     * description: 
     * parameters: 
     * produces: 
     * responses: default
     */
    get: function getHealth(request, h) {
        return 'workin API'
//        return Boom.notImplemented();
    }
};

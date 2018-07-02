'use strict';

const Boom = require('boom');

/**
 * Operations on /auth_token
 */
module.exports = {
    /**
     * summary: Get a token for admin authentication
     * description: 
     * parameters: body
     * produces: 
     * responses: default
     */
    post: function postAuth_token(request, h) {
        return Boom.notImplemented();
    }
};

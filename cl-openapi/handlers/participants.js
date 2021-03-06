'use strict';

const Boom = require('boom');
const participantsData = require('../data/participants')
/**
 * Operations on /participants
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: 
     * responses: default
     */
    get: async function getParticipants (request, h) {
        try {
            return await participantsData.get.default()
        } catch (e) {
            return Boom.boomify(e)
        }
    },
    /**
     * summary: 
     * description: 
     * parameters: body
     * produces: 
     * responses: default
     */
    post: async function postParticipants(request, h) {
        try {
            return await participantsData.post.default(request)
        } catch (e) {
            return Boom.boomify(e)
        }
    }
};

'use strict';

const Db = require('@mojaloop/central-services-database').Db

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
     * operationId: getParticipants
     */
    get: {
        default: async function () {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            try {
                const participants = await Db.participant.find({}, { order: 'name asc' })
                return participants
            } catch (err) {
                throw new Error(err.message)
            }
        }
    },
    /**
     * summary: 
     * description: 
     * parameters: body
     * produces: 
     * responses: default
     * operationId: postParticipants
     */
    post: {
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};

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
        default: async function (req) {
            let participant = req.payload
            try {
                return await Db.participant.insert({
                  name: participant.name,
                  currencyId: participant.currency
                })
              } catch (err) {
                throw new Error(err.message)
              }
        }
    }
};

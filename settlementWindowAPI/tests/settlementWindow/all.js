'use strict';

const Test = require('tape');
const Hapi = require('hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');
const Mockgen = require('../../data/mockgen.js');
const InitServer = require('../../server').init
const testAPIOptions = {
    api: Path.resolve('/home/vgenev/mojaloop/PI2/openapi-petstore/bh-template/cl-openapi/settlementWindowAPI/config/swagger.json'),
    handlers: Path.resolve('/home/vgenev/mojaloop/PI2/openapi-petstore/bh-template/cl-openapi/settlementWindowAPI/handlers'),
    outputvalidation: true
} 
/**
 * Test for /settlementWindow/all
 */
Test('/settlementWindow/all', function (t) {

    /**
     * summary: List all settlement window records
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, 400, 401, 404
     */
    t.test('test getSettlementWindows get operation', async function (t) {

        await InitServer({
            port: 3080
        }, testAPIOptions).then(async (server) => {
            server.plugins.openapi.setHost(server.info.host + ':' + server.info.port);

            const requests = new Promise((resolve, reject) => {
                Mockgen().requests({
                    path: '/settlementWindow/all',
                    operation: 'get',
                    headers: {
                        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJrZXkiOiJsZXQtbWUtaW4ifQ.x8UTyfxxSc498Lbo1pP7zW5BxgPVU_ake2lTlYaRhDc'
                    }
    
                }, function (error, mock) {
                    return error ? reject(error) : resolve(mock);
                });
            });
    
            const mock = await requests;
    
            t.ok(mock);
            t.ok(mock.request);
            //Get the resolved path from mock request
            //Mock request Path templates({}) are resolved using path parameters
            const options = {
                method: 'get',
                url: '/v1' + mock.request.path,
                headers: {
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJrZXkiOiJsZXQtbWUtaW4ifQ.x8UTyfxxSc498Lbo1pP7zW5BxgPVU_ake2lTlYaRhDc'
                }
            };
            if (mock.request.body) {
                //Send the request body
                options.payload = mock.request.body;
            } else if (mock.request.formData) {
                //Send the request form data
                options.payload = mock.request.formData;
                //Set the Content-Type as application/x-www-form-urlencoded
                options.headers = options.headers || {};
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }
            // If headers are present, set the headers.
            if (mock.request.headers && mock.request.headers.length > 0) {
                options.headers = mock.request.headers;
            }
    
            const response = await server.inject(options);
    
            t.equal(response.statusCode, 200, 'Ok response status');
            server.stop()
            t.end();
    
        });
    
        })

    
});

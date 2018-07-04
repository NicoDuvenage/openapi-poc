'use strict';

const Test = require('tape');
const Hapi = require('hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');
const Mockgen = require('../../../data/mockgen.js');
const InitServer = require('../../../server').init

/**
 * Test for /settlementWindow/{settlementWindowId}/close
 */
Test('/settlementWindow/{settlementWindowId}/close', function (t) {

    /**
     * summary: Close a settlement window with given id
     * description: 
     * parameters: settlementWindowId
     * produces: 
     * responses: 200
     */
    t.test('test closeSettlementWindow post operation', async function (t) {

        // const server = new Hapi.Server();

        // await server.register({
        //     plugin: HapiOpenAPI,
        //     options: {
        //         api: Path.resolve(__dirname, '../../../config/swagger.json'),
        //         handlers: Path.join(__dirname, '../../../handlers'),
        //         outputvalidation: true
        //     }
        // });

        await InitServer({port: 82}).then(async (server) => {
            const requests = new Promise((resolve, reject) => {
                Mockgen().requests({
                    path: '/settlementWindow/{settlementWindowId}/close',
                    operation: 'post',
                    headers: {
                        Authorize: 'eyJhbGciOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJrZXkiOiJsZXQtbWUtaW4ifQ.x8UTyfxxSc498Lbo1pP7zW5BxgPVU_ake2lTlYaRhDc'
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
                method: 'post',
                url: '/v1' + mock.request.path
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

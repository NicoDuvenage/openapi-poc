'use strict';

const Hapi = require('hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');
const HapiNowAuth = require('@now-ims/hapi-now-auth');

const init = async function(config = {port: 8080}) {
    const server = new Hapi.Server(config);

    await server.register({ plugin: HapiNowAuth });

    server.auth.strategy('api_key', 'hapi-now-auth', {
        verifyJWT: true,
        keychain: ['secret'],
        validate: require('./security/api_key')
    });
    await server.register({
        plugin: HapiOpenAPI,
        options: {
            api: Path.resolve('./config/swagger.json'),
            handlers: Path.resolve('./handlers')
        }
    });

    await server.start();

    return server;
};

init().then((server) => {
    server.plugins.openapi.setHost(server.info.host + ':' + server.info.port);

    console.log(`Server running on ${server.info.host}:${server.info.port}`);
});

module.exports = {
    init
}
'use strict';

const Hapi = require('hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');
const Db = require('./data/index.js')

async function connectDatabase () {
    return await Db.connect(`mysql://central_ledger:password@localhost:3306/central_ledger`)
}

const init = async function() {

    const server = new Hapi.Server({port: 3005});

    await server.register({
        plugin: HapiOpenAPI,
        options: {
            api: Path.resolve('./central_ledger.json'),
            handlers: Path.resolve('./handlers')
        }
    });

    await server.start();

    return server;
};

init().then(async (server) => {
    await connectDatabase()
    server.plugins.openapi.setHost(server.info.host + ':' + server.info.port);

    server.log(['info'], `Server running on ${server.info.host}:${server.info.port}`);
});

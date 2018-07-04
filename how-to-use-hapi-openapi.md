# Create API from swagger file using hapi-openapi plugin

## Create the API framework from a description file

1. To be sure the file will pass without errors, load it into the [swagger editor](http://editor.swagger.io)
2. When no errors are found from the editor export the file as JSON
3. Install global building tools (Note : If premission errors are thrown during the installation
     , do not try an re-install with 'sudo'. 
     Use the following options : https://docs.npmjs.com/getting-started/fixing-npm-permissions)
      ```
      $ npm install -g yo
      $ npm install -g generator-swaggerize
      ```
4. Create the directory for the project and go there
5. run the generator
      ```
      $ yo swaggerize
      ```
6. Follow prompts. Make sure the path is correct and you choose HAPI.

The `server.js` file should look like that:
```
'use strict';

const Hapi = require('hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');

const init = async function() {

    const server = new Hapi.Server();

    await server.register({
        plugin: HapiOpenAPI,
        options: {
            api: Path.resolve('./central_ledger.json'),
            handlers: Path.resolve('./cl-openapi/handlers')
        }
    });

    await server.start();

    return server;
};

init().then(async (server) => {
    server.plugins.openapi.setHost(server.info.host + ':' + server.info.port);

    server.log(['info'], `Server running on ${server.info.host}:${server.info.port}`);
});
```

## Connect the mojaloop database to the newly created API service

1. Install the central-services-database package 
    ```
    $ npm install --save @mojaloop/central-services-database
    ```
2. Into the project directory, go to the `data` directory and create `index.js` that exports the Db object of the central-services-datgabase module
    ```
    module.exports = require('@mojaloop/central-services-database').Db
    ```
3. Import it into the `server.js` and create the connection function
    ```
    const Db = require('./data/index.js')

    async function connectDatabase () {
      return await Db.connect(`<db connection string>`)
    }
    ```
4. Execute the connection function after the initialization is fulfiled.
    ```
    init().then(async (server) => {
      await connectDatabase()
      server.plugins.openapi.setHost(server.info.host + ':' + server.info.port);

      server.log(['info'], `Server running on ${server.info.host}:${server.info.port}`);
    });
    ```
The `server.js` file should look something like that now.     
```
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
            handlers: Path.resolve('./cl-openapi/handlers')
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
```

## Edit the data access models and handlers



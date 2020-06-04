'use strict';

const Hapi = require('hapi');

// Create a server instance
const server = new Hapi.Server();

// Specify connections (server available on http://localhost:8000)
server.connection({ 
    port: 8000 
});

// Add a route
server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, reply) {
        return reply('hello world');
    }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});

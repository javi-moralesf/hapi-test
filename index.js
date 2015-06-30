var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 9090
});

server.route([
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello! try the following path: /hello/yourname');
        }
    },
    {
        method: 'GET',
        path:'/hello/{name}',
        handler: function (request, reply) {
            var name = encodeURIComponent(request.params.name);
            reply('hello ' + name + '!');
        }
    }
        ]
);

server.start(function () {
    console.log('Navigate to:', server.info.uri);
});

'use strict';

var _Circle = require('./Circle');

var _Circle2 = _interopRequireDefault(_Circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fastify = require('fastify')();

var counter = 10;

fastify.get('/', function (request, reply) {
    var counter = 30;
    reply.send('ok');
});

fastify.get('/circle_area', function (req, res) {
    var radius = req.query.radius;
    var circle = new _Circle2.default(radius);
    res.send({
        area: circle.getArea()
    });
});

fastify.get('/circle_len', function (req, res) {
    var radius = req.query.radius;
    var circle = new _Circle2.default(radius);
    res.send({
        len: circle.getPerimeter()
    });
});

// Run the server!
fastify.listen(3000, function (err) {
    if (err) throw err;
    console.log('server listening on ' + fastify.server.address().port);
});
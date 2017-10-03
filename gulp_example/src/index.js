const fastify = require('fastify')();
import Circle from './Circle';
let counter = 10;

fastify.get('/', (request, reply)=>{
    let counter = 30;
    reply.send('ok');
});

fastify.get('/circle_area', (req, res)=>{
    let radius = req.query.radius;
    let circle = new Circle(radius);
    res.send({
        area: circle.getArea()
    })
});

fastify.get('/circle_len', (req,res)=>{
    let radius = req.query.radius;
    let circle = new Circle(radius);
    res.send({
        len: circle.getPerimeter()
    });
})


// Run the server!
fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`);
});

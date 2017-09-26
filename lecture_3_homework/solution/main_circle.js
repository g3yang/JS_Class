

var Circle = require('./circle_proto');
var c = new Circle(100);
console.log(c.getRadius());

var circleObj = require('./circle_obj');
console.log(circleObj.getArea());

var createCircle = require('./circle_closure');
var circle = createCircle(5);
console.log(circle.getArea());
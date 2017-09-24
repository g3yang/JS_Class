var MiddlewareManager = require('./MiddlewareManager');

var manager = new MiddlewareManager();

manager.use(function(obj,next){
    obj.name = obj.name.toUpperCase();
    next();
});

manager.use(function(obj,next){
    obj.age = 30;
    next();
});


var p = {
    name: 'joe'
}

manager.massage(p);



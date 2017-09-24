
function MiddlewareManager(){
    this.middlewares = [];
    var self = this;
};

MiddlewareManager.prototype.massage = function(data){
    var self = this;
    self.executeMiddlewares(self.middlewares, data, function(){
        console.log(data);
    });
};

MiddlewareManager.prototype.use = function(middleware) {
    this.middlewares.push(middleware);
}

MiddlewareManager.prototype.executeMiddlewares = function(middlewares,args, done){
    var self = this;
    (function iterator(index){
        if(index == middlewares.length){
            return done();
        }
        middlewares[index].call(self, args, function(err){
            if(err){
                console.log('Error: '+ err);
            }
            iterator(++index);
        });
    })(0);
}

module.exports = MiddlewareManager;





var getA = function(cb){
    setTimeout(function(){
        return cb(null, 10);
    }, 2000);
};

var getB= function(cb){
    setTimeout(function(){
        return cb(null, 12);
    }, 3000);
}

var compute = function(a,b, cb){
    setTimeout(function(){
        return cb(null, a+b);
    }, 1000);
}

getA(function(err, a){
    getB(function(err, b){
        compute(a, b, function(err, result){
            console.log('Finish all work');
            console.log(result);
        })
    })

})
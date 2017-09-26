var async = require('async');


async.waterfall([
    function f1(cb){
        setTimeout(function(){
            return cb(null, 200,400);
        },2000);
    },
    function f2(x,y,cb){
        return cb(null, x+y);
    }
], function(err, result){
    console.log(result);
});


async.auto({
    getA: function(cb){
        setTimeout(function(){
            return cb(null, 10);
        }, 3000);
    },
    getB: function(cb){
        setTimeout(function(){
            return cb('B could not be found');
        },2000)
    },
    sum:['getA','getB', function(results,cb){
        var a = results.getA;
        var b = results.getB;
        setTimeout(function(){
            return cb(null, a+b);
        })
    }]
}, function(err,results){
    if(err){
        return console.log(err);
    }
    console.log(results);
});


function get(cb){
    cb();
}

get(function(){

});
var Promise = require('Bluebird');
var request = require('request');

function getA(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(Math.random()>0.5){
                resolve(100);
            }else{
                reject('Failed processing');
            }

        }, 3000);
    })
}


var p = getA();
p.then(function(res){
    console.log(res);
}, function(err){
    console.log(err);
});

console.log('Hello world');

request.get('https://jsonplaceholder.typicode.com/posts', function(err, res){
    console.log(res.body);
});






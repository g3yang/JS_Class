var Promise = require('Bluebird');
var request = require('request');

function getA(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            var r = Math.random();
            if(r>0.0){
                resolve(100);
            }else{
                reject('Failed processing');
            }
        }, 3000);
    })
}


var p = getA();
p.then(function(res){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(2*res);
    },100)
  });  
}).then(function(res){
    console.log(res);
});

console.log('HERE');

/**
console.log('Hello world');

request.get('https://jsonplaceholder.typicode.com/posts', function(err, res){
    console.log(res.body);
});
*/





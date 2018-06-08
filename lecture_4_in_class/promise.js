var Promise = require('Bluebird');
var request = require('request');

function getRandInt(){
    return Math.floor(Math.random()*100);
}

function getA(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
           var a = getRandInt();
           console.log(`A: ${a}`);
           resolve(a);
        }, 3000);
    })
}

function getB(){
    return new Promise((resolve,reject)=>{
        var b = getRandInt();
        console.log(`B: ${b}`);
        resolve(b);
    });
}


Promise.all([getA(), getB()]).then(values=>{
    console.log(`A + B: ${values[0]+values[1]}`);
}, err=>{})


/**
console.log('Hello world');

request.get('https://jsonplaceholder.typicode.com/posts', function(err, res){
    console.log(res.body);
});
*/





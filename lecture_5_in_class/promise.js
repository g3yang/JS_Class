var Promise = require('promise');
var request = require('request');
var _ = require('lodash');

function getRandInt(){
    return Math.floor(Math.random()*100);
}

function getA(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
           var a = getRandInt();
           if(a>70){
               reject('Error in generating A');
           }
           resolve(a);
        }, 200);
    })
}

function getB(){
    return new Promise((resolve,reject)=>{
        var b = getRandInt();
        resolve(b);
    });
}

 
Promise.all([getA(), getB()]).then(values=>{
    const a = values[0];
    const b = values[1];
    console.log(`A + B: ${a+b}`);
}, err=>{
    console.log(err);
});

/**
getA().then((res)=>{ // Success handler
    console.log(`A is ready with value: ${res}`)
},(err)=>{ // Error handler
    console.log(`Error encounter with ${err}`);
});
*/


console.log('Hello world');

request.get('https://jsonplaceholder.typicode.com/posts', function(err, res){
    let posts = JSON.parse(res.body);
    let allIDs = _.map(posts, post=>{
        return post.userId
    });
    let uniqIDs = _.uniq(allIDs);
    console.log(uniqIDs);
    
});






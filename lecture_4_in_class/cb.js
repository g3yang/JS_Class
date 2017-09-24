

function task(callback){
    setTimeout(function(){
        return callback(null, 'TASK DONE');
    },1000);
}


task(function(err, result){
    console.log(result);
});

console.log('Continue');
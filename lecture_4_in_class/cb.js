

function task1(callback){
    setTimeout(function(){
        return callback(null, 'TASK 1');
    },5000);
}

function task2(callback){
    setTimeout(function(){
        return callback(null, 'TASK 2');
    },2000);
}

function task3(callback){
    setTimeout(function(){
        return callback(null, 'TASK 3');
    },3000);
}

var done = function(err, result){
    console.log(result);
}
task1(done);
task2(done);
task3(done);

console.log('Continue');
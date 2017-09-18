
function add(x, y){
    return x + y;
}

// convert to partial functions

function add_by_n(x){
    return function(y){
        return x + y;
    }
}

var add_by_1 = add_by_n(1);
var adds = [];

for(var i = 0; i< 5; i++){
    adds[i] = add_by_n(i);
}

adds.forEach(function(add){
    console.log(add(5));
});
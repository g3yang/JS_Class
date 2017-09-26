
var funcs = [];

for(var i=0;i<5;i++){
    (function(i){
        funcs[i] = function(){
            console.log(i);
        }
    })(i);
}

funcs.forEach(function(f){
    f();
});




function pipe(){
    var funcs = Array.prototype.slice.call(arguments);
    return function(){
        var argArr = Array.prototype.slice.call(arguments);
        var output;
        funcs.forEach(function(fn){
            output = fn.apply(null, argArr);
            argArr = [output];
        });

        return output;
    }
}



(function testPipe1(){

    var f1 = function(x, y){
        return x+y;
    }
    var f2 = function(x){
        return 2*x;
    }

    var f3 = function(x){
        return Math.pow(x,2);
    }
    var f = pipe(f1, f2, f3);
    console.log(f(1,2));

})();

(function testPipe2(){

    var f1 = function(){
        return {};
    };

    var f2 = function(o){
        o.name ='Joe';
        return o;
    }

    var f3 = function(o){
        o.age = 20;
        return o;
    }

    console.log(pipe(f1,f2,f3)());
})();


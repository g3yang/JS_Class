
function f1(arg1){
    return function (arg2){        
        return arg1 + ' ' + arg2;
    } 

}

var f2 = f1('Hello');
console.log(f1('Hello')('Nicolas'));
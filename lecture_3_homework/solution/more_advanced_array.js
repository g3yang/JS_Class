var assert = require('assert');



// Return true if the input is a prime number
// ***
function isPrime(n){
    if(n==1){
        return false;
    }

    for(var i=2; i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

// Sum the positive elements in the array
// Ex [1, 3, -10, -1] => 4
// ***
function sumAllPositive(arr){
    return arr.reduce(function(accum,x){
        return x>0?accum+x:accum;
    },0);
}

// Sum the square of each element
// Ex [1, 2, 3] => 1^2 + 2^2+ 3^2 = 14
// ***
function sumSquare(arr){
    return arr.reduce(function(accum, x){
        return accum + x*x;
    },0);
}


// Find the element string with the most occurance of a provided char
// Ex (['moment','minute',three'], e) =>'three'
// ****
function findOneWithMostChar(str_arr, ch){
    function findOccurance(str, ch){
        var arr = str.split(ch) || []; 
        return arr.length - 1;
    }

    return str_arr.reduce(function(accum, str){
        var occurs1 = findOccurance(str, ch);
        var occurs2 = findOccurance(accum, ch);
        return occurs1>occurs2?str:accum;
    });
}



// Count the number of elemenets each of which fn evaluates true
// Ex ([10, 2, 23], function(x) { return x*x>=100}) => 2 
// ***
function count(arr, fn){
    return arr.reduce(function(accum, x){
        return fn(x)?accum+1:accum;
    }, 0);
}

(function testPrime(){
    assert.equal(false, isPrime(4));
    assert.equal(true, isPrime(2));
    assert.equal(true,isPrime(13));
    assert.equal(false, isPrime(6));
})();


(function testSumSquare(){
    var a1 = [1,2,3];
    var exp1 = 1+4+9;
    assert.equal(exp1, sumSquare(a1));

    var a2 =[5];
    var exp2 = 25;
    assert.equal(exp2, sumSquare(a2));
})();


(function testSumPostive(){
    var arr1=[10, 20, -10, -5];
    var exp1 = 30;
    assert.equal(exp1, sumAllPositive(arr1));

    var arr2=[-1, -10, -10, -5];
    var exp2 = 0;
    assert.equal(exp2, sumAllPositive(arr2));
})();

(function testCount(){
    var arr = [1, 10, -10, 3, -2];
    var res1 = count(arr, function(x){
        return x>5;
    });
    assert.equal(1, res1);

    var res2 = count(arr, function(x){
        return x<0;
    });
    assert.equal(2, res2);
})();


(function testFindMostOccurs(){
    var arr = ['nicolas', 'amanda', 'abbygail','aaaaa'];
    var winner = findOneWithMostChar(arr,'a');
    assert.equal('aaaaa', winner);
})();
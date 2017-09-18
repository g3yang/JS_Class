var assert = require('assert');

function isEven(n){
    return n % 2 ==0;
}


(function testEven(){
    assert.equal(isEven(7), false);
})();
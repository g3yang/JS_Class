var assert = require('assert');

function My_Array(){

}

My_Array.prototype.map = function(fn){
    var res = [];
    for(var i=0; i<this.length;i++){
        res.push(fn(this[i]));
    }
    return res;
}


// Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// **
My_Array.prototype.some = function(fn){

};


// Refer to  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// *** 
My_Array.prototype.find = function(fn){

};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// ****
My_Array.prototype.sort = function(comp_fn){

};


(function testMap(){
    var a = [1,2,3];
    var b = My_Array.prototype.map.call(a, function(x){
        return 2*x;
    });
    assert.deepEqual([2,4,6],b);
})();

// Write proper testcases for your implemented methods



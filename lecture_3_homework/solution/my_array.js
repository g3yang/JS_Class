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
    for(var i = 0; i< this.length; i++){
        if (fn(this[i])){
            return true;
        }
    }
    return false;
};


// Refer to  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// *** 
My_Array.prototype.find = function(fn){
    for(var i=0; i< this.length; i++){
        if(fn(this[i])){
            return this[i];
        }
    }
    return null;
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// ****
My_Array.prototype.sort = function(comp_fn){
     for(var i=0; i<this.length-1; i++){
        for(var j=i+1; j<this.length; j++){
            if(comp_fn(this[i], this[j])>0){
                var temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }

};


(function testMap(){
    var a = [1,2,3];
    var b = My_Array.prototype.map.call(a, function(x){
        return 2*x;
    });
    assert.deepEqual([2,4,6],b);
})();


(function testSome(){
    var a = [10, 2, -1];
    var exp = My_Array.prototype.some.call(a,function(x){
        return x < 0;
    });
    assert.equal(exp, true);

    exp =  My_Array.prototype.some.call(a, function(x){
        return x > 10;
    });
    assert.equal(exp, false);
})();


(function testSort(){
   var a = [10, 9, 20, 1];

  
   My_Array.prototype.sort.call(a, function(x, y){
       return x-y;
   });
   
   console.log(a);

   

})();
// Write proper testcases for your implemented methods

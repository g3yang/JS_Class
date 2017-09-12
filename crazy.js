
//Never do this in real work
//Never do this in real work
//Never do this in real work

Array.prototype.forEach = function(fn){
    console.log('------ForEach: Nicolas Version----------');
    for(var i=0; i<this.length;i++){
        fn(this[i]);
    }
}

Array.prototype.map = function(fn){
    console.log('------Map: Nicolas Version----------');
    var res = [];
    for(var i=0;i<this.length;i++){
        res.push(fn(this[i]));
    }
    return res;
}

var arr = ['Toronto','Halifax','Vancouver'];
arr.forEach(function(item){
    console.log(item);
});

var arr2 = [10,11,12];
var arr2_sqt = arr2.map(function(x){
    return x*x;
});
console.log(arr2_sqt);
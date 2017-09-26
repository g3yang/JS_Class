
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

/**
Array.prototype.sort = function(fn){

}
*/


var arr = [
    {
        name: 'Joe',
        age: 40
    },
    {
        name: 'John',
        age: 20
    },
    {
        name: 'Josh',
        age: 30
    }

];

var sorted = arr.sort(function(a,b){
    return a.age > b.age;
});

console.log(sorted);




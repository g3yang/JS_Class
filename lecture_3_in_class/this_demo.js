
function f(){
    console.log(this);
}



var p = {
    name: 'John',
    langs: ['C++','C'],
    speak: function(){
        var self = this;
        this.langs.forEach(function(lang){
            console.log(self.name + ' knows '+ lang);
        })
    },
};

var p2 = {
    name: 'Nicolas',
    langs:['C#','Javascript']
};

function add(x, y){
    console.log(this);
    return x + y;
}
console.log(add.call(p2,1,2));
console.log(add.apply(p2,[1,2]));
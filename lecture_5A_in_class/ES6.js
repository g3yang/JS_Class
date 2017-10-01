function test(param='Hello World'){
    console.log(param);
}

test();
var firstName='John';
var lastName='Bell';
var name = `${firstName} ${lastName}`;
console.log(name);

var car = {
    color:'Black',
    make: 'Ford'
};
var {color, make} = car;
var a = 2, b = 1;
[a,b] = [b,a];
console.log(b);
console.log(`${color} ${make}`);

var new_arr = [2, 4, 6].map(x=>2*x);

var p = {
    name: 'John',
    langs: ['C++','C'],
    speak: ()=>{
        console.log(this.langs);
        this.langs.forEach((lang)=>{
            console.log(this.name + ' knows '+ lang);
        });
    },
    speak2: ()=>{
        console.log('Nicolas');
    }
};


class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(this.name);
    }
}

p.speak2();
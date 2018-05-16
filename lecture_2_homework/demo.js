var str = 100;

str = 'Hello World';

var add = function(a, b){
    var c = a + b;
    return c;
}

var mutli = function(a, b){
    return a * b;
}

function ex(a,b,cb){
    return 2*cb(a,b);
}

var driver = {
    firstName:'Joe',
    lastName:'Smith'
};

var aCar = {
    make: 'Ford',
    model: 'Escape',
    year: 2018,
    color: 'Blue',
    speed: 0,
    speedUp: function(){
        this.speed+=10;
    },
    slowDown: function(){
        this.speed-=10;
    },
    driver: driver
};

aCar.toString = function(){
    return this.year + ' '+ this.make + ' ' + this.model;
} 

aCar.speedUp();
console.log(aCar.driver.firstName);
console.log(aCar.toString());
console.log(aCar);




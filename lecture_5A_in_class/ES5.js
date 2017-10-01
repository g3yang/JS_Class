var firstName = 'John';
var lastName = 'Bell';
console.log(firstName+' '+lastName);

var car = {
    color:'Black',
    make: 'Ford'
};

var color = car.color;
var make = car.make;

console.log(make + ' '+ color);

var arr = [2, 4, 6];
var new_arr= arr.map(function(x){
    return 2*x;
});
console.log(new_arr);

var a=10;

function foo(){
    var a = 20;
}
foo();
console.log(a);
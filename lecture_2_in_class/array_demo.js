var students = ['Michelle','Steven','Shirley','Max', 'Song'];
students.push('Nancy');

var cars = [
    {
        year: 2018,
        make: 'BMW',
        model: '328'
    },
    {
        year: 2017,
        make: 'Audi',
        model: 'A4'
    }   
];

cars.push({
    year: 2015,
    make: 'Ford',
    model: 'Escape'
});

var binOps = [
    function(a,b){
        return a + b
    },
    function (a,b){
        return a - b;
    },
    function (a,b){
        return a * b
    }
];

var add = binOps[0];
var sub = binOps[1];

binOps[0](10,20);
console.log(add(10,2));

console.log(cars);
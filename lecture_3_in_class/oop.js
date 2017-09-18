var obj = { 
    name: 'Nicolas'
};

var child_obj = Object.create(obj);
child_obj.name = 'John';
console.log(child_obj.__proto__.name);


// ---- User constructor to create object

function Vehicle(color){
    this.color = color;
}

Vehicle.prototype.run = function(){
    return 'boom';
}
Vehicle.prototype.constructor = Vehicle;

function Car(color){
    Vehicle.call(this,color);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.hank = function(){
    return 'vroom';
}

Car.prototype.constructor = Car;

var v = new Car('black');
// create obj using Object.create(Vehicle.prototype)
// Set this to be obj
// Execute Vehicle
console.log(v.hank());
console.log(v instanceof Car);
console.log(v instanceof Vehicle);
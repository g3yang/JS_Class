function Vehicle(color){
    this.color = color;
}

Vehicle.prototype.go = function(){
    return "Vhroom";
}

Vehicle.prototype.wheels = 4;


function Car(color){
    Vehicle.call(this.color);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.honk = function (){
    return "HONK";
};
Car.prototype.constructor = Car;

var c = new Car('Black');
c.wheels = 100;
console.log(c.constructor);


function createCounter(){
    var value = 0;
    return {
        increment: function(){
            value +=1;
            return this;
        },
        getValue: function(){
            return value;
        }
    }
}

var counter = createCounter();
counter.increment().increment();
console.log(counter.value);




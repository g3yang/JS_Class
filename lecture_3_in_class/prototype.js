
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
}

Car.prototype.toString = function(){
    return this.model + ' '+ this.make + ' '+this.year;
}

Car.prototype.speedUp = function(){
    this.speed+=10;
}

function newCar(make, model, year){
    var aCar = Object.create(Car.prototype);
    Car.call(aCar, make, model, year);
    return aCar;
}

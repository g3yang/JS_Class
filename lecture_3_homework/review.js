function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
}

Car.prototype.speedUp = function(){
    this.speed+=10;
}

Car.prototype.getSpeed = function(){
    return this.speed;
}

console.log(Object.getPrototypeOf(car1));

console.log(Object.getPrototypeOf(car2));

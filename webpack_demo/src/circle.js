class Circle{
    constructor(radius){
        this.radius = radius;
    }

    getArea(){
        return Math.PI * this.radius * this.radius;
    }
}

module.exports = Circle;
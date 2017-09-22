

function Circle(radius){
    this.radius = radius;
    this.getRadius = function(){
        return this.radius;
    };
}

Circle.prototype.getPerimeter = function (){
    return 2 * Math.PI * this.radius;
}

Circle.prototype.getArea = function (){
    return Math.PI * Math.pow(this.radius,2); 
}

module.exports = Circle;
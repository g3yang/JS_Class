

var circle = {
    radius: 10,
    getPerimeter: function(){
        return 2 * Math.PI * this.radius;
    },
    getArea: function(){
        return Math.PI * Math.pow(this.radius,2);
    }
};

module.exports = circle;
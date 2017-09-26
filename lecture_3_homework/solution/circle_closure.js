

function createCircle(radius){
    return {
        getPerimeter: function(){
            return 2 * Math.PI * radius;
        },
        getArea: function(){ 
            return Math.PI * radius * radius;
        }

    }
}

module.exports = createCircle;
export default class Circle{
    constructor(r){
        this.r = r;
    }

    getArea(){
        return Math.PI * Math.pow(this.r,2);
    }

    getPerimeter(){
        return 2 * Math.PI * this.r;
    }

    getRadius(){
        return this.radius;
    }
}


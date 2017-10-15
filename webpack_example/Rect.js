export default class Rect {
    constructor(len, width){
        this.len = len;
        this.width = width;
    }

    getArea(){
        return this.len * this.width;
    }
}
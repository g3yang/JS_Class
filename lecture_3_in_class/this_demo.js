function calcArea(){
    return this.side * this.side;
}
var s1 = {
    side: 10
};

var area = calcArea.call(s1);

console.log(area);
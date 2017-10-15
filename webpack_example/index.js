import Circle from './Circle';
import Rect from './Rect';
 

export function getCircleArea(){
    let r = parseInt(document.getElementById('radius').value);
    let circle = new Circle(r);
    document.getElementById('circleArea').innerHTML = circle.getArea();
}


export function getRectArea(){
    let len =  parseInt(document.getElementById('len').value);
    let width = parseInt(document.getElementById('width').value);
    let rect = new Rect(len, width);
    document.getElementById('rectArea').innerHTML = rect.getArea();
}

import Circle from './Circle';

export function calculate(){
    console.log('Caculating.....');
    let radius = parseInt(document.getElementByName('radius'));
    let circle = new Cirlce(radius);
    document.getElementByName('area').value = circle.getArea();
}


